class MyClass {
  public someValue: string | undefined;
}

const mc = new MyClass();
mc.someValue = "hello";

const myFunc = (val: string) => {
  console.log(val); // typo
};

myFunc(mc.someValue);
