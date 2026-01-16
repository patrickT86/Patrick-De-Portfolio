import { MapPin } from "lucide-react";

export function Map() {
  // Houston, Texas coordinates - using Google Maps embed
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="flex items-center gap-3 p-4 border-b border-border/50">
        <MapPin className="h-5 w-5 text-primary" />
        <div>
          <p className="font-semibold">Houston, Texas</p>
          <p className="text-sm text-muted-foreground">United States</p>
        </div>
      </div>
      <iframe
        width="100%"
        height="350"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443088.9735030962!2d-95.68196542968749!3d29.81746034999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1705433200000!5m2!1sen!2sus"
      />
    </div>
  );
}