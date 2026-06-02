---
id: configure-operate-extensions
title: Manage Extensions
sidebar_label: Manage Extensions
---

The `Extensions` tab in `Configuration` is the administrative catalog for installable StreamPipes functionality. This is where administrators review which adapters and pipeline elements are available to the instance, install new ones, uninstall existing ones, update installed items, and manage their permissions.

This page focuses on the current `Configuration > Extensions` screen.

> [Image placeholder: Extensions settings page with bulk actions, filters, search, and extension cards]

## What the Extensions tab is for

The `Extensions` tab is not where users create adapters or build pipelines. It controls which extension items are available in the instance in the first place.

Use this page when you want to:

- inspect the extension catalog available to the instance
- install adapters or pipeline elements that users need
- uninstall items that should no longer be available
- update installed extension items
- manage permissions for installed items

In practice, this page is part of operating StreamPipes as a platform. Teams use adapters, processors, and sinks later in areas such as `Connect` and `Pipelines`, but administrators decide here which of those building blocks are installed.

## Open the page

To open the Extensions catalog:

1. Go to `Configuration`.
2. Open the `Extensions` tab.

Only administrators should manage installations here.

## Understand the screen layout

The current page has three main parts:

- bulk action controls at the top
- filters and search controls
- extension cards in the main catalog area

Each extension card shows:

- the extension name
- a short description
- its type
- whether it is available
- whether it is installed
- the actions that are currently possible

This layout is designed for two different tasks: browsing the catalog and operating the installation lifecycle.

## Read the extension cards

Each card represents one installable extension item.

### Understand availability and installation state

Two states matter most:

- `Available`: the item is present in the catalog and can be discovered by StreamPipes
- `Installed`: the item is already installed and can be used in the appropriate feature area

An item can be available without being installed. That usually means the instance knows about it, but users cannot use it yet.

Example:
An adapter may appear in the catalog, but until it is installed it will not show up as a usable connector option in `Connect`.

### Understand extension types

The current catalog groups items into four main categories:

- `Adapters`
- `Data Streams`
- `Data Processors`
- `Data Sinks`

These categories help administrators focus on the part of the catalog relevant to the task at hand.

Example:
If a team needs a new ingestion option for machine connectivity, start with `Adapters`. If they need a new calculation or filtering step in pipelines, look at `Data Processors`.

### Internally managed items

Some cards are marked as internally managed by StreamPipes. These items are not editable in the same way as normal catalog entries.

If a card is internally managed, you should treat it as part of the system-managed installation state rather than something you can freely install or uninstall from this page.

## Filter and search the catalog

The catalog is designed to be filtered before you act on it.

### Filter by category

Use the category dropdown to restrict the list to:

- `All`
- `Adapters`
- `Data Streams`
- `Data Processors`
- `Data Sinks`

To filter by category:

1. Open the category dropdown at the top of the page.
2. Select the category you want to inspect.

This is the fastest way to reduce noise when you already know what type of extension you are looking for.

Example:
When onboarding a new protocol or source system, filter to `Adapters` first instead of scanning the full catalog.

### Filter by installation status

Use the installation-status filter to switch between:

- `Available & Installed`
- `Installed`
- `Available`

To use it:

1. Open the installation-status dropdown.
2. Select the state you want to review.

This is useful in two common situations:

- use `Installed` when you want to audit what is currently active in the instance
- use `Available` when you want to find items that exist but are not installed yet

Example:
If a user says a certain sink is missing in the pipeline editor, switch to `Available` and search for it. If it appears there, the problem is installation state, not product support.

### Search by name

Use the `Find Element` search field when you know part of the extension name already.

To search:

1. Click the `Find Element` field.
2. Enter part of the element name.
3. Review the filtered cards.

Search is especially useful when the category still contains many items.

### Reload the catalog

Use the reload button to refresh the catalog state from the backend.

Do this after installation or uninstallation work, or whenever you suspect the displayed state is stale.

## Select items for bulk actions

The Extensions page supports bulk installation and bulk uninstallation.

To select items:

1. Click an editable extension card to add it to the selection.
2. Click additional cards if you want to process several items together.
3. Use `Select all` to select all editable items in the current category view.
4. Use `Select none` to clear the selection.

Only editable items can be selected.

A useful detail in the current UI is that changing the search term or installation-status filter clears the current selection. This avoids accidental bulk actions on a list that no longer matches what you are looking at.

Example:
If you are preparing a new instance for a team and need several adapters at once, bulk selection is faster and less error-prone than opening each card individually.

> [Image placeholder: Extensions page with several selected cards and the bulk install button highlighted]

## Install extensions

You can install either one extension at a time or several selected extensions in one run.

### Install a single extension

To install one item:

1. Open `Configuration > Extensions`.
2. Filter or search until you find the required card.
3. Click `Install` on that card.

This opens the installation dialog for that single item.

Use this path when you only need one additional adapter or pipeline element.

### Install multiple extensions

To install several items together:

1. Select the required extension cards.
2. Click `Install selected`.

This opens the same installation dialog, but with all selected items queued.

Use this path when you are preparing an instance for a new team or use case and already know the set of required extensions.

### Work through the installation dialog

The current installation dialog has two stages:

- a preview step
- the installation step

In the preview step, StreamPipes shows the list of elements that are about to be installed.

To complete the installation:

1. Start the install action from the page or a card.
2. Review the listed items in the dialog.
3. Decide whether `Make available to all users with appropriate role` should stay enabled.
4. Click `Next`.
5. Watch the installation progress for each item.
6. Click `Close` when the process finishes.

### Decide whether to install as a public element

The installation dialog includes the checkbox `Make available to all users with appropriate role`.

Use this setting when the installed extension should be broadly available to users who already have the right role to use that extension family.

Think of this as an availability decision at install time.

Example:
If you install a commonly used sink that should be usable across multiple teams, leaving this option enabled is usually the right choice.

### Read the installation progress

During installation, StreamPipes processes items one after another and shows a status for each one.

In practice, you should expect statuses such as:

- waiting
- success
- error

If an installation fails, the dialog can show additional details for that specific item.

This is important for bulk installs because some items may succeed while others fail.

> [Image placeholder: Installation dialog showing the preview step, the public-element checkbox, and per-item status updates]

## Uninstall extensions

The uninstall flow mirrors the install flow.

### Uninstall a single extension

To uninstall one installed item:

1. Open `Configuration > Extensions`.
2. Find the installed card.
3. Click `Uninstall`.
4. Confirm the operation in the dialog.
5. Review the progress and close the dialog.

### Uninstall multiple extensions

To uninstall several items together:

1. Select the installed cards you want to remove.
2. Click `Uninstall selected`.
3. Review the preview in the dialog.
4. Click `Next`.
5. Wait until the statuses are complete.
6. Close the dialog.

Use uninstallation carefully because removing an extension affects what users can create or edit later.

Example:
If you remove a processor that teams still rely on for editing existing pipelines, the administrative cleanup may create confusion or block later changes.

## Update installed extensions

Installed cards provide a menu with additional actions. One of them is `Update`.

To update an installed extension:

1. Open `Configuration > Extensions`.
2. Find the installed card.
3. Open the card menu.
4. Click `Update`.

Use this when the installed item should be refreshed from the available catalog source.

This is a maintenance action rather than a normal end-user workflow.

## Manage permissions for installed extensions

Installed cards also provide `Manage permissions`.

To open it:

1. Open `Configuration > Extensions`.
2. Find the installed extension card.
3. Open the card menu.
4. Click `Manage permissions`.

Use this when access to a specific installed extension should be controlled more explicitly.

This is especially relevant in shared environments where not every team or user should use every available adapter or pipeline element.

## Typical workflows

### Prepare an instance for a new ingestion use case

1. Open `Configuration > Extensions`.
2. Filter to `Adapters`.
3. Search for the required connector family.
4. Install the relevant items.
5. Reload the catalog.
6. Confirm that the adapters are now available in `Connect`.

### Prepare a pipeline workspace for a team

1. Filter to `Data Processors` and `Data Sinks`.
2. Search for the required processing and output elements.
3. Select the needed items.
4. Click `Install selected`.
5. Review the installation statuses.
6. Verify that users can now use them in the pipeline editor.

### Audit what is already active

1. Set the installation-status filter to `Installed`.
2. Review the catalog.
3. Use the card menu for `Update` or `Manage permissions` where needed.

## Common pitfalls

- Do not confuse installing an extension with using it. Installation only makes the item available in the instance.
- Do not uninstall items before checking whether users still depend on them.
- Use category and installation filters together to avoid acting on the wrong part of a large catalog.
- Reload the catalog after changes so the displayed state is current.
- Pay attention to per-item status messages during bulk operations because partial failures are possible.
