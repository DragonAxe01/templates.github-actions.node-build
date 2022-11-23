describe("Configs", () => {
  test("Injected local config", () => {
    throw Error();
    // prepare
    const expected = "this is my config";

    // run
    const val: String | undefined = process.env.MY_CONFIG;

    // verify
    console.log("Secret injected:" + val);
    expect(val).toBeDefined();
    expect((val as String).length > 0).toBeTruthy();
    expect(val as String).toEqual(expected);
  });

  /** To make that test work:
   * - locally: inject a secret in the .env.secret file (not committed).
   * - pipeline: inject using Github actions.
   */
  test("Showing the injected secret from the pipeline", () => {
    // prepare
    const expected = "this is my secret";

    // run
    const secretValue: String | undefined = process.env.MY_SECRET;

    // verify
    console.log("Secret injected:" + secretValue);
    expect(secretValue).toBeDefined();
    expect((secretValue as String).length > 0).toBeTruthy();
    expect(secretValue as String).toEqual(expected);
  });
});

export {};
