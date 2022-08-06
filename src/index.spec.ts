describe("Test suite 1", () => {
  test("Showing the injected secret from the pipeline", () => {
    // prepare
    const expected = "__this is secret1__";

    // run
    const secretValue: String | undefined = process.env.SECRET1;

    // verify
    console.log("Secret injected:" + secretValue);
    expect(secretValue).toBeDefined();
    expect((secretValue as String).length > 0).toBeTruthy();
    expect(secretValue as String).toEqual(expected);
  });
});

export {};
