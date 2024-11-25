class AddNoteScreen {
  get skipButton() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]'
    );
  }

  get AddNoteText() {
    return $('//*[@text="Add note"]');
  }
}

const addNoteScreen = new AddNoteScreen();

export { addNoteScreen };
