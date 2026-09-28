import React from "react";
import { useProductHook } from "../../hooks/productHook";

const DeleteProductModal = ({ status, id }) => {
  const { handleDeleteProduct } = useProductHook();

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{
        backgroundColor: "rgba(2, 44, 34, 0.72)",
        backdropFilter: "blur(7px)",
      }}
    >
      {/* Modal */}

      <div
        className="relative w-full max-w-[390px] rounded-xl p-5"
        style={{
          backgroundColor: "var(--bg-surface)",
          boxShadow: "var(--shadow-lg)",
          border: "1px solid var(--border)",
        }}
      >
        {/* Close */}

        <button
          onClick={() => status((prev) => !prev)}
          type="button"
          className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded-md text-xs cursor-pointer transition-all hover:bg-[var(--bg-soft)]"
          style={{
            color: "var(--text-secondary)",
          }}
        >
          ×
        </button>

        {/* Delete Icon */}

        <div className="flex justify-center">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: "var(--danger-bg)",
              color: "var(--danger)",
            }}
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 6h18" />
              <path d="M8 6V4h8v2" />
              <path d="M19 6l-1 14H6L5 6" />
              <path d="M10 11v5" />
              <path d="M14 11v5" />
            </svg>
          </div>
        </div>

        {/* Content */}

        <div className="text-center mt-4">
          <h2
            className="text-base font-bold"
            style={{
              color: "var(--text-primary)",
            }}
          >
            Delete Product
          </h2>

          <p
            className="text-xs leading-5 mt-1.5 max-w-[270px] mx-auto"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Are you sure you want to delete this product? This action cannot be
            undone.
          </p>
        </div>

        {/* Buttons */}

        <div className="grid grid-cols-2 gap-2.5 mt-5">
          <button
            onClick={() => status((prev) => !prev)}
            type="button"
            className="h-9 rounded-lg text-xs font-semibold cursor-pointer transition-all hover:bg-[var(--bg-soft)]"
            style={{
              backgroundColor: "var(--bg-surface)",
              color: "var(--text-secondary)",
              border: "1px solid var(--border)",
            }}
          >
            Cancel
          </button>

          <button
            onClick={() => {
              handleDeleteProduct(id);
            }}
            type="button"
            className="h-9 rounded-lg text-xs font-semibold cursor-pointer transition-all hover:opacity-90"
            style={{
              backgroundColor: "var(--btn-danger)",
              color: "var(--text-white)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteProductModal;
