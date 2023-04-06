import { activities } from "@/pages/api/data";

//per avere tutti gli eventi
export function getAllEvents() {
  return activities;
}

//per avere gli slug di ogni evento
export function getAllSlugs() {
  let slugs = [];
  getAllEvents().map((event) => {
    slugs.push(`/blog/${event.slug_id}`);
  });
  return slugs;
}

//per avere gli eventi che corrispondono allo slug dell'URL
export function getEventData(slug) {
  let event = null;
  getAllEvents().map((item) => {
    if (item.slug_id === slug) {
      event = item;
    }
  });
  return event;
}
