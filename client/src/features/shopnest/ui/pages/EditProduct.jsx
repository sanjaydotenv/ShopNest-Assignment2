import React from "react";
import { useNavigate } from "react-router";
import AsideNavigate from "../components/AsideNavigate";
import { useProductHook } from "../../hooks/productHook";
import { useSelector } from "react-redux";

const dummyProduct = {
  _id: "dummy-product",
  title: "Product Not Found",
  price: 0,
  image: null,
};

const EditProduct = () => {
  const navigate = useNavigate();

  const { allProducts = [] } = useSelector((state) => state.product);

  const {
    loading,
    handleProductUpdate,
    register,
    handleSubmit,
    errors,
    handleImageChange,
  } = useProductHook();

  const prid = localStorage.getItem("prid");

  const foundProduct = allProducts?.find((product) => product._id === prid);

  const pro = foundProduct || dummyProduct;

  const productNotFound = !foundProduct;

  const onSubmit = async (data) => {
    if (productNotFound) {
      return;
    }

    await handleProductUpdate(pro._id, data);
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
        className="fixed left-0 top-0 z-50 h-screen w-[220px] px-4 py-5 flex flex-col"
        style={{
          backgroundColor: "var(--bg-dark)",
          color: "var(--text-white)",
        }}
      >
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

        <AsideNavigate />

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

      <main className="ml-[220px] flex-1 p-7">
        {/* Header */}

        <div className="mb-7">
          <h1 className="text-2xl font-bold tracking-tight">Edit Product</h1>

          <p
            className="text-sm mt-1"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Update product details
          </p>
        </div>

        {productNotFound && (
          <div
            className="mb-5 px-4 py-3 rounded-xl flex items-center justify-between"
            style={{
              backgroundColor: "rgba(239,68,68,.08)",
              border: "1px solid rgba(239,68,68,.2)",
              color: "var(--danger)",
            }}
          >
            <div>
              <p className="font-semibold text-sm">Product not found</p>

              <p className="text-xs mt-1 opacity-80">
                The selected product could not be found in the product list.
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate("/Products")}
              className="text-xs font-semibold px-3 py-2 rounded-lg cursor-pointer"
              style={{
                backgroundColor: "var(--danger)",
                color: "var(--text-white)",
              }}
            >
              Back to Products
            </button>
          </div>
        )}

        <div className="grid grid-cols-[1fr_330px] gap-6 max-w-[1050px]">
          <div
            className="rounded-xl p-5"
            style={{
              backgroundColor: "var(--bg-surface)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Product Name
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
                  type="text"
                  defaultValue={pro.title}
                  placeholder="Enter product name"
                  disabled={productNotFound}
                  {...register("title", {
                    required: "Product title is required",
                  })}
                  className="w-full h-10 px-3 rounded-lg outline-none text-sm disabled:opacity-50"
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

              <div className="w-[50vw]">
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
                  type="number"
                  defaultValue={pro.price}
                  placeholder="Enter price"
                  disabled={productNotFound}
                  {...register("price", {
                    required: "Product price is required",
                    valueAsNumber: true,
                  })}
                  className="w-full h-10 px-3 rounded-lg outline-none text-sm disabled:opacity-50"
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

                <div className="flex items-center gap-3">
                  <div
                    className="relative w-[72px] h-[72px] rounded-lg overflow-hidden"
                    style={{
                      backgroundColor: "var(--bg-soft)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {pro.image ? (
                      <img
                        src={pro.image}
                        alt={pro.title}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-2xl">
                        ▧
                      </div>
                    )}

                    {!productNotFound && (
                      <button
                        type="button"
                        className="absolute top-1 right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] cursor-pointer"
                        style={{
                          backgroundColor: "var(--danger)",
                          color: "var(--text-white)",
                        }}
                      >
                        ×
                      </button>
                    )}
                  </div>

                  <label
                    htmlFor="product-image"
                    className={`w-[72px] h-[72px] rounded-lg flex items-center justify-center text-2xl transition-all ${
                      productNotFound
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                    style={{
                      backgroundColor: "var(--bg-soft)",
                      color: "var(--text-muted)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    +
                    <input
                      id="product-image"
                      type="file"
                      accept="image/png,image/jpeg,image/jpg,image/webp"
                      onChange={handleImageChange}
                      disabled={productNotFound}
                      className="hidden"
                    />
                  </label>
                </div>

                <p
                  className="text-xs mt-2"
                  style={{
                    color: "var(--text-muted)",
                  }}
                >
                  Add or replace product image
                </p>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => navigate("/Products")}
                  className="h-10 px-5 rounded-lg text-sm font-medium cursor-pointer transition-all hover:opacity-80"
                  style={{
                    backgroundColor: "var(--bg-surface)",
                    color: "var(--text-secondary)",
                    border: "1px solid var(--border)",
                  }}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={loading || productNotFound}
                  className="px-8 py-3 rounded-xl font-semibold cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
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
                  ) : productNotFound ? (
                    "Product Not Found"
                  ) : (
                    "Update Product"
                  )}
                </button>
              </div>
            </form>
          </div>

          <div
            className="rounded-xl p-4 h-fit sticky top-7"
            style={{
              backgroundColor: "var(--bg-surface)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <h2 className="text-sm font-semibold mb-3">Previous Product</h2>

            <div
              className="w-full h-[180px] rounded-lg overflow-hidden flex items-center justify-center"
              style={{
                backgroundColor: "var(--bg-soft)",
              }}
            >
              {pro.image ? (
                <img
                  src={pro.image}
                  alt={pro.title}
                  className="w-full h-full object-contain"
                />
              ) : (
                <span
                  className="text-4xl"
                  style={{
                    color: "var(--text-muted)",
                  }}
                >
                  ▧
                </span>
              )}
            </div>

            <div className="mt-4">
              <p className="text-sm font-semibold">{pro.title}</p>

              <p
                className="text-sm font-bold mt-1"
                style={{
                  color: "var(--text-primary)",
                }}
              >
                ₹ {Number(pro.price || 0).toLocaleString("en-IN")}
              </p>

              <div className="flex items-center gap-1.5 mt-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: productNotFound
                      ? "var(--danger)"
                      : "var(--success)",
                  }}
                />

                <span
                  className="text-xs"
                  style={{
                    color: productNotFound ? "var(--danger)" : "var(--success)",
                  }}
                >
                  {productNotFound ? "Unavailable" : "In Stock"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EditProduct;
