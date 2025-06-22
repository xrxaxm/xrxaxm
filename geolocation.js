(function () {
  // Fallback ke IP-based lokasi (ipapi.co)
  function fallbackLocation() {
    fetch("https://ipapi.co/json/")
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
      .catch(err => {
        console.error("Gagal ambil data dari IPAPI:", err);
      });
  }

  // Isi ke HTML
  function setData(res) {
    const map = {
      "coun": res["country_name"],
      "stat": res["region"],
      "city": res["city"],
      "sim": res["org"],
      "region_code": res["region_code"],
      "ipku": res["ip"],
      "country": res["country"],
      "country_code": res["country_code"],
      "country_code_iso3": res["country_code_iso3"],
      "country_capital": res["country_capital"],
      "country_tld": res["country_tld"],
      "postal": res["postal"],
      "latitude": res["latitude"],
      "longitude": res["longitude"],
      "timezone": res["timezone"],
      "country_calling_code": res["country_calling_code"],
      "languages": res["languages"],
      "country_area": res["country_area"],
      "country_population": res["country_population"]
    };

    for (const id in map) {
      const el = document.getElementById(id);
      if (el) el.textContent = map[id];
    }
  }

  // Minta lokasi akurat
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        // Isi langsung lat lon ke span
        const latEl = document.getElementById("latitude");
        const lonEl = document.getElementById("longitude");
        if (latEl) latEl.textContent = lat.toFixed(6);
        if (lonEl) lonEl.textContent = lon.toFixed(6);

        // Optional: reverse geocoding dari lat/lon ke kota jika mau pakai API eksternal
      },
      err => {
        console.warn("User denied geolocation or error:", err.message);
        fallbackLocation(); // pakai IP-based jika ditolak
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
    );
  } else {
    fallbackLocation();
  }
})();
