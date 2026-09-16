"use client";

const BILLY_PREVIEW =
  "https://res.cloudinary.com/dcc1yy1zv/video/upload/v1785155638/www/export-1785155486459_iv24ue.mp4";

export function BillyIllustration() {
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
        aria-label="Billy marketplace preview"
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
        <source src={BILLY_PREVIEW} type="video/mp4" />
        Your browser does not support this video.
      </video>
    </div>
  );
}
