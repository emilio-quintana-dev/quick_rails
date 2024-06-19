import * as Turbo from "@hotwired/turbo";
import * as ActiveStorage from "@rails/activestorage";

import "./tailwind.css";

Turbo.start();
ActiveStorage.start();

console.log("Vite ⚡️ Rails");
