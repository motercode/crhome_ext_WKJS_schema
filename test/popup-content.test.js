const browser = require("sinon-chrome/webextensions");

import { getUrl } from "src/popup.js";

describe("popup.js ", () => {
  beforeAll(() => {
    global.browser = browser;
  });

  beforeEach(() => {
    browser.flush();
  });
//this is an integration test example
  describe("dummyITest ", () => {
    it("should return full runtime URL", async () => {
      browser.runtime.getURL.returns("http://localhost/popup-content.html");
      expect(await getUrl()).toBe("http://localhost/popup-content.html");
    });
  });

  afterAll(() => {
    browser.flush();
    delete global.browser;
  });
});
