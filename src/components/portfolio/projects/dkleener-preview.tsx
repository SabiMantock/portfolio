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
        <source src="/videos/dkleener-preview.mp4" type="video/mp4" />
        Your browser does not support this video.
      </video>
    </div>
  );
}
