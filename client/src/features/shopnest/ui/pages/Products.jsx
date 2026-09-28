import { useEffect, useState } from "react";
import { useAuthHook } from "../../hooks/authHook";
import AsideNavigate from "../components/AsideNavigate";
import DeleteProductModal from "../components/DeleteProductModal ";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { toast } from "react-toastify";
import ProductSkeleton from "../components/ProductSkeleton ";
import { useProductHook } from "../../hooks/productHook";

const products = [
  {
    name: "Nike Air Max",
    price: "₹4,999",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    tag: "Featured",
  },
  {
    name: "Sony Headphones",
    price: "₹7,999",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    tag: "Best Seller",
  },
  {
    name: "Apple Watch",
    price: "₹24,999",
    image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=500",
    tag: "Featured",
  },
  {
    name: "Laptop Backpack",
    price: "₹1,999",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    tag: "Popular",
  },
  {
    name: "iPhone 14",
    price: "₹59,999",
    image: "https://images.unsplash.com/photo-1592286927505-2fd0c3d0e8e4?w=500",
    tag: "New",
  },
  {
    name: "Office Chair",
    price: "₹8,999",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500",
    tag: "Featured",
  },
  {
    name: "Mechanical Keyboard",
    price: "₹4,499",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
    tag: "Popular",
  },
  {
    name: "DSLR Camera",
    price: "₹54,999",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
    tag: "Featured",
  },
];

export default function ProductsPage() {
  const { isAuthenticate, loading } = useSelector((state) => state.auth);
  const { allProducts } = useSelector((state) => state.product);

  const { navigate } = useAuthHook();

  const { handleAllProducts, setIsShow, isShow, setProductID, productID } =
    useProductHook();

  localStorage.setItem("prid", productID);

  useEffect(() => {
    handleAllProducts();
  }, []);

  if (loading) {
    return <ProductSkeleton />;
  }

  if (!isAuthenticate) {
    toast.warn("Please register Or login first");
    return <Navigate to={"/"} />;
  }

  return (
    <div>
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
          <header className="flex items-center justify-between mb-8">
            {/* Heading */}
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Products</h1>

              <p
                className="text-sm mt-1"
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                Explore our latest collection
              </p>
            </div>

            {/* Header Right */}
            <div className="flex items-center gap-5">
              {/* Search */}
              <div
                className="w-[280px] h-10 rounded-lg flex items-center px-3.5 gap-2.5"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <span
                  className="text-sm"
                  style={{
                    color: "var(--text-muted)",
                  }}
                >
                  ⌕
                </span>

                <input
                  type="text"
                  placeholder="Search products..."
                  className="outline-none bg-transparent w-full text-sm"
                  style={{
                    color: "var(--text-primary)",
                  }}
                />
              </div>

              {/* Notification */}
              <button
                className="text-lg transition-opacity hover:opacity-70"
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                ♧
              </button>

              {/* Cart */}
              <button
                className="text-lg transition-opacity hover:opacity-70"
                style={{
                  color: "var(--primary)",
                }}
              >
                🛒
              </button>

              {/* Add Product */}
              <button
                onClick={() => navigate("/addProduct")}
                className="h-10 px-5 rounded-lg flex items-center gap-2 text-sm font-semibold transition-all hover:opacity-90"
                style={{
                  backgroundColor: "var(--btn-primary)",
                  color: "var(--text-white)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <span className="text-lg leading-none">+</span>
                Add Product
              </button>
            </div>
          </header>

          {/* ================= PRODUCT GRID ================= */}
          <section className="grid grid-cols-3 gap-5">
            {allProducts?.map((product, index) => (
              <div
                key={product?._id}
                className="rounded-xl p-3.5 transition-all duration-200 hover:-translate-y-1"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                {/* ================= IMAGE ================= */}
                <div
                  className="relative h-[180px] rounded-lg overflow-hidden flex items-center justify-center"
                  style={{
                    backgroundColor: "var(--bg-soft)",
                  }}
                >
                  {/* Tag */}
                  <span
                    className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md text-[10px] font-semibold"
                    style={{
                      backgroundColor:
                        index % 3 === 1 ? "var(--warning)" : "var(--primary)",

                      color: "var(--text-white)",
                    }}
                  >
                    {product?.tag}
                  </span>

                  {/* Product Image */}
                  <img
                    src={product?.image}
                    alt={product?.name}
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>

                {/* ================= DETAILS ================= */}
                <div className="px-1 pt-3">
                  {/* Product Name */}
                  <h3 className="text-sm font-semibold truncate">
                    {product?.title}
                  </h3>

                  {/* Price */}
                  <p
                    className="text-sm font-bold mt-1.5"
                    style={{
                      color: "var(--text-primary)",
                    }}
                  >
                    {product?.price}
                  </p>

                  {/* Stock */}
                  <div className="flex items-center gap-1.5 mt-1.5">
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

                  {/* ================= BUTTONS ================= */}
                  <div className="grid grid-cols-2 gap-2.5 mt-3">
                    {/* Edit */}
                    <button
                      onClick={() => {
                        setProductID(product._id);
                        navigate("/editProduct");
                      }}
                      className="h-8 rounded-lg text-xs font-semibold transition-all hover:opacity-90"
                      style={{
                        backgroundColor: "var(--primary)",
                        color: "var(--text-white)",
                      }}
                    >
                      Edit
                    </button>

                    {/* Delete */}
                    <button
                      onClick={() => {
                        setProductID(product._id);
                        setIsShow((prev) => !prev);
                      }}
                      className="h-8 rounded-lg text-xs font-semibold transition-all hover:opacity-90"
                      style={{
                        backgroundColor: "var(--danger-bg)",
                        color: "var(--danger)",
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>

      {isShow ? <DeleteProductModal id={productID} status={setIsShow} /> : ""}
    </div>
  );
}
