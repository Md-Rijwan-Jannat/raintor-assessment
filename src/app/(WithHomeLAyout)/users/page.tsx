"use client";

import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteUsers } from "@/hooks/useInfiniteUsers";
import { UserCard } from "@/app/(WithHomeLAyout)/_components/module/users/UserCard";
import Container from "../_components/ui/Container";
import { Loader2, Users } from "lucide-react";

// Enhanced animations
const animations = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes glow {
    0%, 100% { box-shadow: 0 0 20px rgba(184, 255, 6, 0.3); }
    50% { box-shadow: 0 0 30px rgba(184, 255, 6, 0.5), 0 0 40px rgba(196, 255, 236, 0.3); }
  }
  
  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  
  @keyframes pulse-slow {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.6; }
  }
`;

export default function UsersPage() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
    refetch,
  } = useInfiniteUsers();

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "100px",
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const allUsers = data?.pages.flatMap((page) => page.users) ?? [];
  const totalUsers = data?.pages[0]?.total ?? 0;

  if (isLoading) {
    return (
      <Container>
        {/* Enhanced themed background */}
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(184, 255, 6, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(196, 255, 236, 0.15) 0%, transparent 50%),
              linear-gradient(135deg, rgba(184, 255, 6, 0.05) 0%, rgba(196, 255, 236, 0.05) 100%)
            `,
          }}
        />

        <div className="relative min-h-screen py-28">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-4 mb-8 p-8 bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl shadow-[#B8FF06]/10">
                <Users
                  className="w-12 h-12 text-[#B8FF06]"
                  style={{ animation: "glow 2s ease-in-out infinite" }}
                />
                <div className="text-left">
                  <h1 className="text-5xl md:text-6xl font-bold">
                    <span
                      className="bg-clip-text text-transparent"
                      style={{
                        backgroundImage: `linear-gradient(to right, #B8FF06, #C4FFEC)`,
                        backgroundSize: "200% auto",
                        animation: "shimmer 3s linear infinite",
                      }}
                    >
                      User Directory
                    </span>
                  </h1>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
                    Loading amazing profiles...
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {Array.from({ length: 9 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-white/85 dark:bg-gray-900/85 border border-gray-200/50 dark:border-gray-700/50 rounded-3xl p-6 backdrop-blur-xl shadow-lg"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    boxShadow:
                      "0 10px 25px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(184, 255, 6, 0.05)",
                  }}
                >
                  <div className="flex items-start gap-6">
                    <div
                      className="w-20 h-20 rounded-2xl flex-shrink-0"
                      style={{
                        background: `linear-gradient(45deg, #B8FF06, #C4FFEC)`,
                        animation: "pulse-slow 2s ease-in-out infinite",
                      }}
                    />
                    <div className="flex-grow space-y-3">
                      <div
                        className="h-5 rounded-full"
                        style={{
                          background: `linear-gradient(45deg, #B8FF06, #C4FFEC)`,
                          animation: "pulse-slow 2s ease-in-out infinite",
                          width: "75%",
                        }}
                      />
                      <div
                        className="h-4 rounded-full"
                        style={{
                          background: `linear-gradient(45deg, #C4FFEC, #B8FF06)`,
                          animation: "pulse-slow 2.5s ease-in-out infinite",
                          width: "50%",
                        }}
                      />
                      <div className="space-y-2 pt-2">
                        {Array.from({ length: 4 }).map((_, i) => (
                          <div
                            key={i}
                            className="h-3 rounded-full"
                            style={{
                              background: `linear-gradient(45deg, #B8FF06, #C4FFEC)`,
                              animation: `pulse-slow ${
                                2 + i * 0.3
                              }s ease-in-out infinite`,
                              width: `${100 - i * 15}%`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        {/* Enhanced themed background */}
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(184, 255, 6, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(196, 255, 236, 0.15) 0%, transparent 50%),
              linear-gradient(135deg, rgba(184, 255, 6, 0.05) 0%, rgba(196, 255, 236, 0.05) 100%)
            `,
          }}
        />

        <div className="relative min-h-screen py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center py-20">
              <div
                className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl border border-gray-200/50 dark:border-gray-700/50 p-12 rounded-3xl max-w-md mx-auto transform transition-all duration-500 hover:scale-105"
                style={{
                  boxShadow: `
                    0 25px 50px -12px rgba(0, 0, 0, 0.15),
                    0 0 0 1px rgba(239, 68, 68, 0.05),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `,
                }}
              >
                <div
                  className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center"
                  style={{
                    background: `linear-gradient(to bottom right, #ef4444, #f87171)`,
                    boxShadow: "0 8px 25px rgba(239, 68, 68, 0.3)",
                  }}
                >
                  <span className="text-3xl">⚠️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Something went wrong
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  {(error as Error)?.message ||
                    "Failed to load users. Please try again."}
                </p>
                <button
                  onClick={() => refetch()}
                  className="relative overflow-hidden rounded-2xl px-8 py-3 font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#B8FF06]/30 focus:ring-offset-2 text-gray-900"
                  style={{
                    background: `linear-gradient(to right, #B8FF06, #C4FFEC)`,
                    boxShadow:
                      "0 10px 25px rgba(184, 255, 6, 0.3), 0 4px 10px rgba(196, 255, 236, 0.2)",
                  }}
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      {/* Inject enhanced animation styles */}
      <style jsx>{animations}</style>

      {/* Enhanced themed background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(184, 255, 6, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(196, 255, 236, 0.15) 0%, transparent 50%),
            linear-gradient(135deg, rgba(184, 255, 6, 0.05) 0%, rgba(196, 255, 236, 0.05) 100%)
          `,
        }}
      />

      <div className="relative min-h-screen py-20">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Professional Hero Section */}
          <div className="text-center mb-16 transform transition-all duration-700">
            <div
              className="inline-flex items-center gap-6 mb-8 p-8 bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50"
              style={{
                boxShadow: `
                  0 25px 50px -12px rgba(0, 0, 0, 0.1),
                  0 0 0 1px rgba(184, 255, 6, 0.05),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1)
                `,
              }}
            >
              <div className="relative">
                <Users
                  className="w-14 h-14 text-[#B8FF06]"
                  style={{ animation: "glow 2s ease-in-out infinite" }}
                />
                <div
                  className="absolute inset-0 w-14 h-14 rounded-full animate-ping opacity-20"
                  style={{ backgroundColor: "#B8FF06" }}
                />
              </div>
              <div className="text-left">
                <h1 className="text-5xl md:text-6xl font-bold">
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(to right, #B8FF06, #C4FFEC)`,
                      backgroundSize: "200% auto",
                      animation: "shimmer 3s linear infinite",
                    }}
                  >
                    User Directory
                  </span>
                </h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
                  Infinite possibilities, infinite scroll
                </p>
              </div>
            </div>

            <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed mb-6">
              Discover and connect with our comprehensive user database
              featuring seamless infinite scroll and modern design
            </p>

            {totalUsers > 0 && (
              <div
                className="inline-flex items-center gap-3 bg-white/85 dark:bg-gray-900/85 backdrop-blur-2xl px-6 py-3 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 transform transition-all duration-500"
                style={{
                  boxShadow:
                    "0 10px 25px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(184, 255, 6, 0.05)",
                }}
              >
                <div
                  className="w-3 h-3 rounded-full shadow-lg"
                  style={{
                    backgroundColor: "#B8FF06",
                    animation: "glow 2s ease-in-out infinite",
                  }}
                />
                <span className="text-gray-800 dark:text-gray-200 font-medium">
                  Showing {allUsers.length} of {totalUsers} users
                </span>
              </div>
            )}
          </div>

          {allUsers.length > 0 ? (
            <div className="space-y-12">
              {/* Enhanced Professional User Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 transform transition-all duration-700">
                {data?.pages.map((page, pageIndex) => (
                  <Fragment key={pageIndex}>
                    {page.users.map((user, userIndex) => (
                      <div
                        key={user.id}
                        role="article"
                        tabIndex={0}
                        className="focus:outline-none focus:ring-4 focus:ring-[#B8FF06]/30 focus:ring-offset-2 rounded-3xl transform transition-all duration-500 hover:scale-105"
                        style={{
                          animationDelay: `${
                            (pageIndex * 10 + userIndex) * 0.1
                          }s`,
                        }}
                      >
                        <UserCard user={user} />
                      </div>
                    ))}
                  </Fragment>
                ))}
              </div>

              {/* Enhanced Professional Loading/End Indicator */}
              <div ref={ref} className="flex justify-center py-12">
                {isFetchingNextPage && (
                  <div
                    className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl p-6 rounded-2xl flex items-center gap-4 border border-gray-200/50 dark:border-gray-700/50 transform transition-all duration-500"
                    style={{
                      boxShadow: `
                        0 25px 50px -12px rgba(0, 0, 0, 0.1),
                        0 0 0 1px rgba(184, 255, 6, 0.05),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1)
                      `,
                    }}
                  >
                    <div className="relative">
                      <Loader2
                        className="w-8 h-8 animate-spin"
                        style={{ color: "#B8FF06" }}
                      />
                      <div
                        className="absolute inset-0 w-8 h-8 border-2 rounded-full animate-pulse"
                        style={{
                          borderColor: "#C4FFEC",
                          borderTopColor: "transparent",
                        }}
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-gray-100">
                        Loading more users...
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Please wait while we fetch more profiles
                      </p>
                    </div>
                  </div>
                )}
                {!hasNextPage && !isFetchingNextPage && (
                  <div
                    className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl p-8 rounded-3xl text-center border border-gray-200/50 dark:border-gray-700/50 transform transition-all duration-500"
                    style={{
                      boxShadow: `
                        0 25px 50px -12px rgba(0, 0, 0, 0.1),
                        0 0 0 1px rgba(184, 255, 6, 0.05),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1)
                      `,
                    }}
                  >
                    <div
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                      style={{
                        background: `linear-gradient(to bottom right, #B8FF06, #C4FFEC)`,
                        boxShadow:
                          "0 8px 25px rgba(184, 255, 6, 0.3), 0 4px 10px rgba(196, 255, 236, 0.2)",
                      }}
                    >
                      <span className="text-2xl">🎉</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      You have reached the end!
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      All{" "}
                      <span
                        className="font-semibold"
                        style={{ color: "#B8FF06" }}
                      >
                        {totalUsers}
                      </span>{" "}
                      users loaded successfully
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Enhanced Professional Empty State */
            <div className="text-center py-20 transform transition-all duration-700">
              <div
                className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl p-12 rounded-3xl max-w-md mx-auto border border-gray-200/50 dark:border-gray-700/50"
                style={{
                  boxShadow: `
                    0 25px 50px -12px rgba(0, 0, 0, 0.1),
                    0 0 0 1px rgba(184, 255, 6, 0.05),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `,
                }}
              >
                <div
                  className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center transform transition-all duration-500"
                  style={{
                    background: `linear-gradient(to bottom right, #B8FF06, #C4FFEC)`,
                    opacity: 0.9,
                    animation: "float 3s ease-in-out infinite",
                    boxShadow:
                      "0 8px 25px rgba(184, 255, 6, 0.3), 0 4px 10px rgba(196, 255, 236, 0.2)",
                  }}
                >
                  <Users className="w-12 h-12 text-gray-900" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                  No users found
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  There are no users available at the moment. Please check back
                  later.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
