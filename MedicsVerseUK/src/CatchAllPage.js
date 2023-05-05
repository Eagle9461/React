import React, { useState, useEffect } from "react";
import {
  initPlasmicLoader,
  PlasmicRootProvider,
  PlasmicComponent,
  ComponentRenderData
} from '@plasmicapp/loader-react';
import { PLASMIC } from './plasmic-init';
// We try loading the Plasmic page for the current route.
// If it doesn't exist, then return "Not found."
function CatchAllPage() {
  const [loading, setLoading] = useState(true);
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    async function load() {
      const pageData = await PLASMIC.maybeFetchComponentData("Forum");
      setPageData(pageData);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!pageData) {
    return <div>Not found</div>;
  }
  // The page will already be cached from the `load` call above.
  return <PlasmicComponent component={"Forum"} />;
}
export default CatchAllPage;