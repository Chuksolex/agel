"use client";
import Link from "next/link";

export default function SocialButtons() {
  return (
    <div className="d-flex gap-2">
      <Link href="https://facebook.com" target="_blank" className="btn btn-primary">
        <i className="bi bi-facebook"></i>
      </Link>
      <Link href="https://twitter.com" target="_blank" className="btn btn-info">
        <i className="bi bi-twitter"></i>
      </Link>
      <Link href="https://instagram.com" target="_blank" className="btn btn-danger">
        <i className="bi bi-instagram"></i>
      </Link>
    </div>
  );
}
