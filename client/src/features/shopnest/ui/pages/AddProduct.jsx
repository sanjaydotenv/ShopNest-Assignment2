import { useRef, useState } from "react";
import { useProductHook } from "../../hooks/productHook";
import AsideNavigate from "../components/AsideNavigate";

const AddProduct = () => {
  const imgRef = useRef();

  const {
    handleCreateProduct,
    handleSubmit,
    errors,
    register,
    handleImageChange,
    setProductPrice,
    setProductTitle,
    productPrice,
    productTitle,
    imagePreview,
    loading,
  } = useProductHook();

  const handleImageInput = () => {
    imgRef.current.click();
  };

  return (
    <div
      className="min-h-screen flex"
      style={{
        backgroundColor: "var(--bg-main)",
        color: "var(--text-primary)",
      }}
    >
      {/* ================= SIDEBAR ================= */}
      <aside
        className="fixed left-0 top-0 h-screen w-[220px] px-4 py-5 flex flex-col"
        style={{
          backgroundColor: "var(--bg-dark)",
          color: "var(--text-white)",
        }}
      >
        {/* Logo */}
        <div className="px-2 mb-8 flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--primary)",
            }}
          >
            S
          </div>

          <span className="font-bold tracking-tight text-base">ShopNest</span>
        </div>

        {/* Navigation */}
        <AsideNavigate />

        {/* User */}
        <div
          className="mt-auto pt-5 border-t flex items-center gap-3"
          style={{
            borderColor: "rgba(255,255,255,.1)",
          }}
        >
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-sm"
            style={{
              backgroundColor: "var(--bg-surface)",
              color: "var(--primary)",
            }}
          >
            👤
          </div>

          <div className="min-w-0">
            <p className="text-xs font-semibold truncate">Mayur Bairagi</p>

            <p className="text-[10px] text-white/45 truncate">Admin</p>
          </div>
        </div>
      </aside>

      {/* ================= MAIN ================= */}
      <main className="ml-[220px] flex-1 p-7">
        {/* ================= HEADER ================= */}
        <div className="mb-7">
          <h1 className="text-2xl font-bold tracking-tight">Add New Product</h1>

          <p
            className="text-sm mt-1"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Fill in the details to add a new product
          </p>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="grid grid-cols-[1fr_330px] gap-6 max-w-[1050px]">
          {/* ================= FORM ================= */}
          <div
            className="rounded-xl p-5"
            style={{
              backgroundColor: "var(--bg-surface)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <form
              onSubmit={handleSubmit(handleCreateProduct)}
              className="space-y-5"
            >
              {/* Product Name */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Product Title
                  <span
                    className="ml-1"
                    style={{
                      color: "var(--danger)",
                    }}
                  >
                    *
                  </span>
                </label>

                <input
                  onInput={(e) => setProductTitle(e.target.value)}
                  {...register("title", {
                    required: "Product title is required",
                  })}
                  type="text"
                  placeholder="Enter product title"
                  className="w-full h-10 px-3 rounded-lg outline-none text-sm transition-all"
                  style={{
                    backgroundColor: "var(--bg-surface)",
                    border: "1px solid var(--border)",
                    color: "var(--text-primary)",
                  }}
                />
                {errors.title && (
                  <p className="text-red-700 text-sm mt-2 ml-2">
                    {errors.title.message}
                  </p>
                )}
              </div>

              {/* Description */}

              {/* Price + Stock */}
              <div className="grid grid-cols-2 gap-4">
                {/* Price */}
                <div className=" w-[40vw]">
                  <label className="block text-sm font-medium mb-2">
                    Price
                    <span
                      className="ml-1"
                      style={{
                        color: "var(--danger)",
                      }}
                    >
                      *
                    </span>
                  </label>

                  <input
                    onInput={(e) => setProductPrice(e.target.value)}
                    {...register("price", {
                      required: "Product price is required",
                    })}
                    type="number"
                    placeholder="Enter price"
                    className="w-full h-10 px-3 rounded-lg outline-none text-sm"
                    style={{
                      backgroundColor: "var(--bg-surface)",
                      border: "1px solid var(--border)",
                      color: "var(--text-primary)",
                    }}
                  />
                  {errors.price && (
                    <p className="text-red-700 text-sm mt-2 ml-2">
                      {errors.price.message}
                    </p>
                  )}
                </div>

                {/* Stock */}
              </div>

              {/* Images */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Images
                  <span
                    className="ml-1"
                    style={{
                      color: "var(--danger)",
                    }}
                  >
                    *
                  </span>
                </label>

                <div
                  onClick={handleImageInput}
                  className="h-[150px] rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all"
                  style={{
                    backgroundColor: "var(--bg-surface)",
                    border: "1.5px dashed var(--border-dark)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-xl mb-2"
                    style={{
                      backgroundColor: "var(--bg-soft)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    ▧
                  </div>
                  <input
                    onChange={handleImageChange}
                    ref={imgRef}
                    hidden
                    type="file"
                    accept="image/png,image/jpeg,image/jpg,image/webp"
                  />

                  <p className="text-sm font-medium">Click to upload images</p>

                  <p
                    className="text-xs mt-1"
                    style={{
                      color: "var(--text-muted)",
                    }}
                  >
                    or drag and drop
                  </p>
                </div>
                {errors.image && (
                  <p className="text-red-700 text-sm mt-2 ml-2">
                    {errors.image.message}
                  </p>
                )}
              </div>

              <div className="flex gap-3">
                {/* Add Product */}
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3 rounded-xl font-semibold cursor-pointer disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: "var(--primary)",
                    color: "var(--text-white)",
                  }}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-1 px-8 py-1">
                      <span className="w-2 h-2 rounded-full bg-white animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-2 h-2 rounded-full bg-white animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-2 h-2 rounded-full bg-white animate-bounce" />
                    </span>
                  ) : (
                    "Add Product"
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* ================= PRODUCT PREVIEW ================= */}
          <div
            className="rounded-xl p-4 h-fit sticky top-7"
            style={{
              backgroundColor: "var(--bg-surface)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            {/* Preview Title */}
            <h2 className="text-sm font-semibold mb-3">Product Preview</h2>

            {/* Preview Image */}
            <div
              className="w-full h-[180px] rounded-lg flex items-center justify-center"
              style={{
                backgroundColor: "var(--bg-soft)",
              }}
            >
              <img
                className={`${imagePreview ? "h-[100%] w-[100%] object-contain" : ""}`}
                src={imagePreview}
                alt=""
              />
              <div
                className="text-4xl absolute"
                style={{
                  color: "var(--text-muted)",
                }}
              >
                {imagePreview ? "" : "▧"}
              </div>
            </div>

            {/* Preview Details */}
            <div className="mt-4">
              <p
                className="text-sm font-semibold"
                style={{
                  color: "var(--text-primary)",
                }}
              >
                {productTitle ? productTitle : "Product name"}
              </p>

              <p
                className="text-sm font-bold mt-1"
                style={{
                  color: "var(--text-primary)",
                }}
              >
                ₹{productPrice ? productPrice : "0"}
              </p>

              <div className="flex items-center gap-1.5 mt-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: "var(--success)",
                  }}
                />

                <span
                  className="text-xs"
                  style={{
                    color: "var(--success)",
                  }}
                >
                  In Stock
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= ACTION BUTTONS ================= */}
      </main>
    </div>
  );
};

export default AddProduct;
