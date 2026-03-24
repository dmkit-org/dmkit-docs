---
sidebar_position: 4
---

# Navigation

## Layout

The app uses a persistent sidebar tree alongside a main canvas area. A breadcrumb at the top reflects the user's current position in the hierarchy.

```
┌─────────────────┬────────────────────────────────────┐
│ SIDEBAR         │  Campaign > World > Location > Area │
│                 │                                    │
│ 📁 My Campaign  │                                    │
│   🌍 Faerun     │         MAIN CANVAS                │
│     📍 Baldur's │                                    │
│       🚪 Tavern │                                    │
│                 │                                    │
└─────────────────┴────────────────────────────────────┘
```

## Routes

```
/campaigns
/campaigns/:campaignId
/campaigns/:campaignId/worlds/:worldId
/campaigns/:campaignId/worlds/:worldId/locations/:locationId
/campaigns/:campaignId/worlds/:worldId/locations/:locationId/areas/:areaId
```

## Navigation Patterns

| Action | How |
|---|---|
| Drill down | Double-click a card on the canvas |
| Jump to any level | Click a node in the sidebar tree |
| Go up a level | Click a breadcrumb segment |

## Sidebar Tree

The sidebar tree shows the full hierarchy for the active campaign. It updates immediately when new Worlds, Locations, or Areas are created. Clicking any node navigates directly to that level without needing to drill through intermediate canvases.
