import { MapPin } from "lucide-react";

export function Map() {
  // 14903 Woodhorn DR, Houston, TX 77062 - using Google Maps embed
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="flex items-center gap-3 p-4 border-b border-border/50">
        <MapPin className="h-5 w-5 text-primary" />
        <div>
          <p className="font-semibold">14903 Woodhorn DR</p>
          <p className="text-sm text-muted-foreground">Houston, TX 77062, United States</p>
        </div>
      </div>
      <iframe
        width="100%"
        height="350"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=14903+Woodhorn+Dr,+Houston,+TX+77062&zoom=15"
      />
    </div>
  );
}