# Midway Assessment

## Create your own repo

- Use this template repo to create your own repo.
- Your repo should be **public**.

## Setup and usage of the repo

Install the dependencies: `npm install`

Test the proper install: `npm start -- list`
It should list two recipes.

Execute any command: `npm start -- <argument 1> <argument 2> <argument 3> ...<argument N>`

This command will be seen from process arguments point of view:

`ts-node src/index.ts <argument 1> <argument 2> <argument 3> ...<argument N>`

You can have at least one argument. The first 
argument is always a command, like `list` in the example above.

You can find the initial recipes in the `index.ts`, if you want to regenerate
them delete the `data.json` from the repo root.

You can use arguments containing spaces by putting them into quotation marks, e.g.:

`npm start -- create "Duck in orange sauce"` 

(This command is not a working example right now.)

## Tasks & Rules

You can find the tasks and rules in the [tasks.md](./tasks.md) 
