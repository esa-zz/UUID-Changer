"use strict";
import { Base64 } from "js-base64";

class v2rayLinkUuidChanger {
  constructor() {
    this.newUuid = "";
    this.links = [];
    this.output = [];
    this.initializeElements();
    this.addEventListeners();
  }

  initializeElements() {
    this.goButton = document.getElementById("go");
    this.copyButton = document.getElementById("copy");
    this.outputBox = document.getElementById("output");
    this.linksBox = document.getElementById("links");
    this.uuidBox = document.getElementById("uuid");
    this.toast = document.getElementById("toast");
  }

  addEventListeners() {
    this.goButton.addEventListener("click", () => this.processLinks());
    this.copyButton.addEventListener("click", () => this.copyToClipboard());
  }

  processLinks() {
    this.getValues();
    this.changeLinks();
    this.showNewLinks();
  }

  getValues() {
    this.newUuid = this.uuidBox.value.trim();
    this.links = this.linksBox.value.trim().split("\n");
    this.output = []; // Reset output
  }

  changeLinks() {
    this.output = this.links.map((link) => this.changeUuid(link));
  }

  changeUuid(link) {
    try {
      const [protocol, connectionConfig] = link.split("://");
      if (protocol === "vmess") {
        return this.vmessChange(protocol, connectionConfig);
      }
      const connectionDetails = connectionConfig.split("@")[1];
      return `${protocol}://${this.newUuid}@${connectionDetails}`;
    } catch (error) {
      console.error("Error processing link:", link, error);
      return link; // Return original link in case of error
    }
  }

  vmessChange(protocol, connectionConfig) {
    try {
      let strConfig = Base64.decode(connectionConfig);
      let jsonConfig = JSON.parse(strConfig);
      jsonConfig.id = this.newUuid;
      strConfig = Base64.encode(JSON.stringify(jsonConfig));
      return `${protocol}://${strConfig}`;
    } catch (error) {
      console.error("Error in VMess link processing:", error);
      return `${protocol}://${connectionConfig}`; // Return original in case of error
    }
  }

  showNewLinks() {
    this.outputBox.textContent = ""; // Clear previous output
    this.outputBox.insertAdjacentText("afterbegin", this.output.join("\r\n"));
  }

  copyToClipboard() {
    const text = this.output.join("\r\n");
    navigator.clipboard.writeText(text).then(
      () => {
        console.log("Async: Copying to clipboard was successful!");
        this.toast.classList.remove("hidden");
        setTimeout(() => this.toast.classList.add("hidden"), 2000);
      },
      (err) => console.error("Async: Could not copy text:", err)
    );
  }
}

// Instantiate and use the v2rayLinkUuidChanger class
const app = new v2rayLinkUuidChanger();
