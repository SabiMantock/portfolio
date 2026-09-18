"use client";

export function DkleenerPreview() {
  return (
    <div
      style={{
        width: "100%",
        height: 360,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <video
        aria-label="Dkleener website walkthrough"
        autoPlay
        muted
        loop
        playsInline
        controls
        preload="metadata"
        style={{
          display: "block",
          width: "100%",
          maxHeight: "100%",
          objectFit: "contain",
          borderRadius: 14,
        }}
      >
        <source
          src="https://res.cloudinary.com/ez9kcige/video/upload/v1789732234/Screen_Recording_2026-09-18_at_11.04.58_wkfasv.mp4"
          type="video/mp4"
        />
        Your browser does not support this video.
      </video>
    </div>
  );
}
