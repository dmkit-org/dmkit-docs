---
sidebar_position: 2
---

# Data Model

## Entity Inheritance

All placeable things in DMKit share a common base type. The hierarchy splits into Combatants (things that fight) and Objects (things that don't).

```
Entity (base)
├── id, name, description, imageUrl
│
├── Combatant                        — HP, AC, ability scores, initiative
│   ├── Character                    — NPC; has disposition + optional Faction
│   └── PlayerCharacter              — party member; managed at Campaign level
│
└── Object                           — passive, no combat stats
    ├── Item                         — loot and equipment
    └── Hazard                       — traps and environmental dangers
                                       (has damage, trigger condition, save DC)
```

## Key Design Decisions

**Characters have a disposition, not a type.**
NPCs and enemies are the same `Character` type. The `disposition` field (`friendly | neutral | hostile | unknown`) determines how they behave. A Character can change sides without changing type — just update the disposition.

**Token instances are separate from entity definitions.**
When a Character is placed on a battle map it becomes a token instance. The instance holds runtime state (current HP, conditions, position) independently of the base entity in the library. Editing a token does not change the library entry. Deleting a library entity does not remove existing tokens — tokens hold a soft reference.

**PlayerCharacters live at Campaign level.**
Party members travel across Worlds, so they are scoped to the Campaign rather than to a specific Location or Area.

## Disposition Values

| Value | Meaning |
|---|---|
| `friendly` | Allied with the party |
| `neutral` | No strong allegiance |
| `hostile` | Actively opposed to the party |
| `unknown` | Disposition not yet established |

## Relationships

- A **Faction** groups Characters and has its own disposition toward the party
- A **Quest** can reference Characters, Locations, and Items
- A **Session Note** can reference Characters and Locations
- A **Character** has an optional `factionId` reference
