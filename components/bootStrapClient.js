"use client";
import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    // Load bootstrap bundle only in browser
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then(() => {
        console.log("✅ Bootstrap JS loaded");
      })
      .catch((err) => console.error("Bootstrap load error:", err));
  }, []);

  return null; // nothing to render, it's just for loading bootstrap
}
