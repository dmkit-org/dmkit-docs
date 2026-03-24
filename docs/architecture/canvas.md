---
sidebar_position: 3
---

# Canvas Architecture

DMKit uses two different canvas libraries depending on the level of the hierarchy. Each was chosen for the specific requirements of that level.

## Canvas Levels

| Level | Library | Purpose |
|---|---|---|
| World | React Flow | Free-position Location cards on a spatial canvas |
| Location | React Flow | Free-position Area cards on a spatial canvas |
| Area | Konva (`react-konva`) | Grid-based battle map with draggable tokens |

## World & Location Canvas (React Flow)

React Flow provides an infinite pan/zoom canvas for placing and connecting cards. It is MIT licensed with no commercial restrictions.

**Why React Flow over tldraw:**
- MIT license — no commercial restrictions, no watermarks, no annual fee
- Custom node components are plain React — no new APIs to learn
- Well-suited for structured layouts with typed edges (travel routes)

**Coordinate system:**
Location and Area card positions are stored as **percentage-based coordinates** relative to canvas dimensions. This ensures cards remain anchored at their correct relative positions regardless of screen size or whether a background map image is present.

```
x: 45.2  →  45.2% from the left edge of the canvas
y: 30.8  →  30.8% from the top edge of the canvas
```

**Travel routes** between Locations are React Flow edges with an optional label (e.g. "3 days by road").

## Battle Map (Konva)

Konva provides a GPU-accelerated Canvas 2D canvas well-suited for grid-based token movement.

**Why Konva over React Flow:**
- React Flow is a graph tool — it does not model grids or snapping natively
- Konva handles per-pixel control, image layers, and drag-snap to grid natively
- Battle maps are closer to a mini VTT (Virtual Tabletop) than a node graph

**Grid:**
- Default cell size: 50px
- Configurable per Area
- Tokens snap to the nearest grid cell on placement and drag

**Token positions** are stored as grid coordinates `(gridX, gridY)` rather than pixel coordinates, making them resolution-independent.

## Map Background Images

World canvases support an optional background image (uploaded or AI-generated). The image is stored in S3 and referenced by URL. Because card positions are percentage-based, existing Location cards stay in the correct relative position after a background image is added, changed, or removed.
