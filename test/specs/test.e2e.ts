import { expect } from "@wdio/globals";
import { addNoteScreen } from "../screens/android/add-note.screen";

describe("Add Notes", () => {
  it("Skips tutorial", async () => {
    await addNoteScreen.skipButton.click();
    expect(await addNoteScreen.AddNoteText.isDisplayed()).toBe(true);
  });
});
