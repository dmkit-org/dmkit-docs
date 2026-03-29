---
sidebar_position: 5
---

# Entities

The Entity Library holds the reusable building blocks of your campaign: Characters, Items, and Hazards. Entities are scoped to a campaign and can be placed as tokens on any battle map within that campaign.

## Characters

Characters represent anyone in your world — shopkeepers, guards, nobles, dragons. They are not inherently NPCs or enemies — a character's **disposition** determines their role.

| Disposition | Meaning |
|---|---|
| Friendly | Allied with the party |
| Neutral | No strong allegiance |
| Hostile | Actively opposed to the party |
| Unknown | Not yet established |

A character can change disposition at any time without changing type. A captured enemy becomes neutral; a betraying ally becomes hostile.

**Character fields:** name, description, image, disposition, faction, HP, AC, ability scores.

## Items

Items are loot, equipment, artefacts, or anything the party can pick up or interact with.

**Item fields:** name, description, image.

## Hazards

Hazards are traps and environmental dangers — pit traps, poison darts, magical runes, collapsing ceilings.

**Hazard fields:** name, description, damage, trigger condition, save DC.

## Managing the Library

Access the entity library from the sidebar inside a campaign. Use the search bar to find entities by name or filter by type.

Editing an entity in the library updates its definition but does not retroactively change the runtime state of existing tokens on battle maps.

## Factions

Characters can be assigned to a Faction. Manage Factions from the sidebar — create a faction, set its disposition, and assign member Characters.
