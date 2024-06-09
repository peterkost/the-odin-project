let cachedIds = [];
let fetchingIds = false;
const fetchIds = async () => {
  if (cachedIds.length > 0 || fetchingIds) {
    return cachedIds;
  }

  fetchingIds = true;

  const response = await fetch(
    "https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=11",
  );
  const ids = await response.json();
  cachedIds = ids.objectIDs;
  return cachedIds;
};

let cachedGalleryItems = new Map();
const fetchGalleryItem = async (id) => {
  if (cachedGalleryItems.has(id)) {
    return cachedGalleryItems.get(id);
  }

  cachedGalleryItems.set(id, {});

  const response = await fetch(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`,
  );

  const rawItem = await response.json();
  const galleryItem = {
    name: rawItem.objectName,
    id: rawItem.objectID,
    image: rawItem.primaryImageSmall,
  };

  cachedGalleryItems.set(id, galleryItem);
  return galleryItem;
};

export { fetchIds, fetchGalleryItem };
