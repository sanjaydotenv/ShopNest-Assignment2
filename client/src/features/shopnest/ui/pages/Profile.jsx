import React from "react";
import { Navigate, useNavigate } from "react-router";
import AsideNavigate from "../components/AsideNavigate";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Profile = () => {
  const navigate = useNavigate();

  const { user, isAuthenticate } = useSelector((state) => state.auth);

  if (!isAuthenticate) {
    toast.warn("Please register Or login first");
    return <Navigate to={"/"} />;
  }

  return (
    <div
      className="min-h-screen flex"
      style={{
        backgroundColor: "var(--bg-main)",
        color: "var(--text-primary)",
      }}
    >
      <AsideNavigate />

      <main className="ml-[220px] flex-1 p-7">
        {/* Header */}

        <div className="mb-7">
          <h1 className="text-2xl font-bold tracking-tight">My Profile</h1>

          <p
            className="text-sm mt-1"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Manage your account information
          </p>
        </div>

        <div
          className="max-w-[720px] rounded-xl p-6"
          style={{
            backgroundColor: "var(--bg-surface)",
            border: "1px solid var(--border)",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <div
            className="flex items-center gap-4 pb-6 border-b"
            style={{
              borderColor: "var(--border)",
            }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
              style={{
                backgroundColor: "var(--bg-dark)",
                color: "var(--text-white)",
              }}
            >
              👤
            </div>

            <div>
              <h2 className="text-lg font-bold">{user?.user?.name}</h2>

              <p
                className="text-sm mt-0.5"
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                {user?.user?.email}
              </p>
            </div>
          </div>

          {/* =================================================
              PROFILE DETAILS
          ================================================== */}

          <div className="mt-5">
            {/* Name */}

            <div
              className="flex items-center justify-between py-3.5 border-b"
              style={{
                borderColor: "var(--border)",
              }}
            >
              <span
                className="text-sm"
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                Name
              </span>

              <span className="text-sm font-medium">{user?.user?.name}</span>
            </div>

            {/* Email */}

            <div
              className="flex items-center justify-between py-3.5 border-b"
              style={{
                borderColor: "var(--border)",
              }}
            >
              <span
                className="text-sm"
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                Email
              </span>

              <span className="text-sm font-medium">{user?.user?.email}</span>
            </div>

            {/* Role */}

            {/* Member Since */}

            <div className="flex items-center justify-between py-3.5">
              <span
                className="text-sm"
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                Member Since
              </span>

              <span className="text-sm font-medium">Soon</span>
            </div>
          </div>

          {/* =================================================
              EDIT BUTTON
          ================================================== */}

          <button
            type="button"
            className="w-full h-10 mt-5 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-200 hover:opacity-90"
            style={{
              backgroundColor: "var(--btn-primary)",
              color: "var(--text-white)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            Edit Profile
          </button>
        </div>
      </main>
    </div>
  );
};

export default Profile;
