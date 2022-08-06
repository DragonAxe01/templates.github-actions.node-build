describe("Test suite 1", () => {
  test("Showing the injected secret from the pipeline", () => {
    // run
    const secretValue: String | undefined = process.env.SECRET1;

    // verify
    expect(secretValue).toBeDefined();
    expect((secretValue as String).length > 0).toBeTruthy();
  });
});

export {}