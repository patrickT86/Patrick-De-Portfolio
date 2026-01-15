import { useState } from "react";
import { MapPin, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

export function Map() {
  const [mapboxToken, setMapboxToken] = useState("");
  const [showMap, setShowMap] = useState(false);
  const [error, setError] = useState("");

  const handleShowMap = () => {
    if (!mapboxToken.trim()) {
      setError("Please enter a valid Mapbox public token");
      return;
    }
    setError("");
    setShowMap(true);
  };

  // Houston, Texas coordinates
  const lat = 29.7604;
  const lng = -95.3698;
  const zoom = 11;

  if (showMap) {
    return (
      <div className="border-2 border-border bg-card overflow-hidden">
        <iframe
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://api.mapbox.com/styles/v1/mapbox/dark-v11.html?title=false&access_token=${mapboxToken}&zoomwheel=false#${zoom}/${lat}/${lng}`}
        />
      </div>
    );
  }

  return (
    <div className="border-2 border-border p-6 bg-card">
      <div className="flex items-center gap-3 mb-4">
        <MapPin className="h-6 w-6" />
        <h3 className="text-lg font-bold">Location Map</h3>
      </div>
      
      <p className="text-muted-foreground mb-4">
        To view the interactive map, please enter your Mapbox public token. 
        You can get one for free at{" "}
        <a 
          href="https://mapbox.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="underline hover:text-foreground"
        >
          mapbox.com
        </a>
      </p>

      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Enter Mapbox public token"
          value={mapboxToken}
          onChange={(e) => setMapboxToken(e.target.value)}
          className="border-2"
        />
        <Button onClick={handleShowMap} className="shrink-0">
          Show Map
        </Button>
      </div>

      {/* Fallback static location display */}
      <div className="mt-6 p-4 border-2 border-border bg-secondary">
        <div className="flex items-center gap-3">
          <MapPin className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="font-medium">Houston, Texas</p>
            <p className="text-sm text-muted-foreground">United States</p>
          </div>
        </div>
      </div>
    </div>
  );
}
