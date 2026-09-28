const ProductSkeleton = () => {
  return (
    <div
      className="min-h-screen flex"
      style={{
        backgroundColor: "var(--bg-main)",
      }}
    >
      {/* ================= SIDEBAR ================= */}
      <aside
        className="fixed left-0 top-0 h-screen w-[275px] px-5 py-7 flex flex-col"
        style={{
          backgroundColor: "var(--bg-dark)",
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 mb-10">
          <div
            className="w-10 h-10 rounded-full animate-pulse"
            style={{
              backgroundColor: "var(--primary-light)",
            }}
          />

          <div
            className="w-24 h-5 rounded-md animate-pulse"
            style={{
              backgroundColor: "rgba(255,255,255,.15)",
            }}
          />
        </div>

        {/* Nav Skeleton */}
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 px-3 py-3"
            >
              <div
                className="w-4 h-4 rounded animate-pulse"
                style={{
                  backgroundColor: "rgba(255,255,255,.12)",
                }}
              />

              <div
                className="w-20 h-4 rounded animate-pulse"
                style={{
                  backgroundColor: "rgba(255,255,255,.12)",
                }}
              />
            </div>
          ))}
        </div>

        {/* User */}
        <div
          className="mt-auto pt-6 flex items-center gap-3"
          style={{
            borderTop: "1px solid rgba(255,255,255,.1)",
          }}
        >
          <div
            className="w-12 h-12 rounded-full animate-pulse"
            style={{
              backgroundColor: "rgba(255,255,255,.15)",
            }}
          />

          <div className="space-y-2">
            <div
              className="w-24 h-3 rounded animate-pulse"
              style={{
                backgroundColor: "rgba(255,255,255,.15)",
              }}
            />

            <div
              className="w-12 h-2.5 rounded animate-pulse"
              style={{
                backgroundColor: "rgba(255,255,255,.1)",
              }}
            />
          </div>
        </div>
      </aside>

      {/* ================= MAIN ================= */}
      <main className="ml-[275px] flex-1 p-10">
        {/* Header */}
        <header className="flex items-center justify-between mb-10">
          <div className="space-y-3">
            <div
              className="w-32 h-8 rounded-lg animate-pulse"
              style={{
                backgroundColor: "var(--border)",
              }}
            />

            <div
              className="w-52 h-4 rounded-md animate-pulse"
              style={{
                backgroundColor: "var(--border)",
              }}
            />
          </div>

          <div className="flex items-center gap-5">
            {/* Search */}
            <div
              className="w-[350px] h-12 rounded-full animate-pulse"
              style={{
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border)",
              }}
            />

            {/* Icons */}
            <div
              className="w-6 h-6 rounded animate-pulse"
              style={{
                backgroundColor: "var(--border)",
              }}
            />

            <div
              className="w-7 h-7 rounded animate-pulse"
              style={{
                backgroundColor: "var(--border)",
              }}
            />

            {/* Add Button */}
            <div
              className="w-44 h-12 rounded-full animate-pulse"
              style={{
                backgroundColor: "var(--border)",
              }}
            />
          </div>
        </header>

        {/* ================= PRODUCT GRID ================= */}
        <section className="grid grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="rounded-[24px] p-4 animate-pulse"
              style={{
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              {/* Product Image */}
              <div
                className="h-[225px] rounded-[20px]"
                style={{
                  backgroundColor: "var(--bg-soft)",
                }}
              />

              {/* Product Info */}
              <div className="px-1 pt-5">
                {/* Name */}
                <div
                  className="w-[65%] h-5 rounded-md"
                  style={{
                    backgroundColor: "var(--border)",
                  }}
                />

                {/* Price */}
                <div
                  className="w-[35%] h-5 rounded-md mt-3"
                  style={{
                    backgroundColor: "var(--border)",
                  }}
                />

                {/* Stock */}
                <div className="flex items-center gap-2 mt-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{
                      backgroundColor: "var(--border)",
                    }}
                  />

                  <div
                    className="w-16 h-3 rounded"
                    style={{
                      backgroundColor: "var(--border)",
                    }}
                  />
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-3 mt-5">
                  <div
                    className="h-10 rounded-full"
                    style={{
                      backgroundColor: "var(--bg-soft)",
                    }}
                  />

                  <div
                    className="h-10 rounded-full"
                    style={{
                      backgroundColor: "var(--bg-soft)",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default ProductSkeleton;