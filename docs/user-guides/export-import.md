---
sidebar_position: 6
---

# Export & Import

DMKit lets you export a full campaign as a JSON file and import it to create an independent copy. This is useful for backups, sharing campaign templates, or migrating to a new account.

## Exporting a Campaign

1. From the campaign list, open the menu on the campaign you want to export
2. Click **Export Campaign**
3. A `.json` file downloads to your computer

The export file contains everything: Worlds, Locations, Areas, token instances, all entity library entries, Factions, Quests, Session Notes, and Player Characters.

## Importing a Campaign

1. From the campaign list, click **Import Campaign**
2. Select the `.json` file you exported
3. The campaign is created as a new independent copy

The imported campaign:
- Gets a new name suffixed with **(Imported)**
- Is scoped to your account
- Has no connection to the original — changes to one do not affect the other
- Has all internal IDs remapped to new values

## Notes

- Only valid DMKit export files can be imported. Malformed or unsupported files will show an error.
- Import is atomic — if anything goes wrong during import, no partial data is written.
- There is no size limit enforced on import files, but very large campaigns may take longer to process.
