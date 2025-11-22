import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import {
  onSnapshot,
  collection,
  orderBy,
  query,
  deleteDoc,
  doc
} from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const [partnerships, setPartnerships] = useState([]);
  const [catalysts, setCatalysts] = useState([]);

  useEffect(() => {
    // Fetch Partnership Requests
    const q1 = query(
      collection(db, "partnershipInquiries"),
      orderBy("createdAt", "desc")
    );
    const unsubscribe1 = onSnapshot(q1, (snapshot) => {
      setPartnerships(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
    });

    // Fetch Catalyst Requests
    const q2 = query(
      collection(db, "catalystRequests"),
      orderBy("createdAt", "desc")
    );
    const unsubscribe2 = onSnapshot(q2, (snapshot) => {
      setCatalysts(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
    });

    return () => {
      unsubscribe1();
      unsubscribe2();
    };
  }, []);

  // 🔥 Delete Partnership Record
  const deletePartnership = async (id) => {
    if (!window.confirm("Are you sure you want to delete this partnership entry?")) return;

    try {
      await deleteDoc(doc(db, "partnershipInquiries", id));
      alert("Record deleted successfully.");
    } catch (error) {
      alert("Error deleting record.");
      console.error(error);
    }
  };

  // 🔥 Delete Catalyst Record
  const deleteCatalyst = async (id) => {
    if (!window.confirm("Are you sure you want to delete this catalyst entry?")) return;

    try {
      await deleteDoc(doc(db, "catalystRequests", id));
      alert("Record deleted successfully.");
    } catch (error) {
      alert("Error deleting record.");
      console.error(error);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/admin/login");
  };

  return (
    <div className="p-10 bg-[#111] min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-white">Admin Dashboard</h1>

        <button
          onClick={handleLogout}
          className="px-6 py-3 rounded-xl bg-red-600 text-white font-bold hover:bg-red-800"
        >
          Logout
        </button>
      </div>

      {/* Partnership Table */}
      <div className="bg-[#111] p-6 rounded-2xl shadow-xl border border-gray-200 mb-10">
        <h2 className="text-2xl font-bold mb-4 text-orange-600">
          Partnership Inquiries
        </h2>

        <table className="w-full border">
          <thead>
            <tr className="bg-gray-900 text-white">
              <th className="p-3">Organization</th>
              <th className="p-3">Contact</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Package</th>
              <th className="p-3">Additional Info</th>
              <th className="p-3">Delete</th> {/* NEW COLUMN */}
            </tr>
          </thead>

          <tbody>
            {partnerships.map((p) => (
              <tr key={p.id} className="border text-center">
                <td className="p-3">{p.organizationName}</td>
                <td className="p-3">{p.contactPerson}</td>
                <td className="p-3">{p.email}</td>
                <td className="p-3">{p.phone}</td>
                <td className="p-3 capitalize">{p.package}</td>
                <td className="p-3 text-sm text-white">
                  {p.additionalInfo || "—"}
                </td>

                {/* DELETE BUTTON */}
                <td className="p-3">
                  <button
                    onClick={() => deletePartnership(p.id)}
                    className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Catalyst Requests */}
      <div className="bg-[#111] p-6 rounded-2xl shadow-xl border border-gray-200">
        <h2 className="text-2xl font-bold mb-4 text-orange-600">
          Catalyst Requests
        </h2>

        <table className="w-full border">
          <thead>
            <tr className="bg-gray-900 text-white">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Interest</th>
              <th className="p-3">Delete</th> {/* NEW COLUMN */}
            </tr>
          </thead>

          <tbody>
            {catalysts.map((c) => (
              <tr key={c.id} className="border text-center">
                <td className="p-3">{c.name}</td>
                <td className="p-3">{c.email}</td>
                <td className="p-3">{c.interest}</td>

                {/* DELETE BUTTON */}
                <td className="p-3">
                  <button
                    onClick={() => deleteCatalyst(c.id)}
                    className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
