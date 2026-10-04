(() => {
  document.querySelectorAll("[data-timeline-group]").forEach((timeline) => {
    const entries = timeline.querySelectorAll("details[data-timeline-entry]");

    entries.forEach((entry) => {
      entry.addEventListener("toggle", () => {
        if (!entry.open) return;

        entries.forEach((otherEntry) => {
          if (otherEntry !== entry && otherEntry.open) {
            otherEntry.open = false;
          }
        });
      });
    });
  });
})();