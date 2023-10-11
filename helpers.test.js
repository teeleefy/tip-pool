describe("Helpers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    billAmtInput.value = 50;
    tipAmtInput.value = 10;
    submitPaymentInfo();
  });

  it("should sum total tip amount of all payments on sumPaymentTotal()", function () {
    expect(sumPaymentTotal("tipAmt")).toEqual(10);
    billAmtInput.value = 100;
    tipAmtInput.value = 15;
    submitPaymentInfo();
    expect(sumPaymentTotal("tipAmt")).toEqual(25);
  });

  it("should sum total bill amounts of all payments on sumPaymentTotal()", function () {
    expect(sumPaymentTotal("billAmt")).toEqual(50);
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    submitPaymentInfo();
    expect(sumPaymentTotal("billAmt")).toEqual(150);
  });

  it("should sum total tip percent on sumPaymentTotal()", function () {
    expect(sumPaymentTotal("tipPercent")).toEqual(20);
    billAmtInput.value = 100;
    tipAmtInput.value = 10;
    submitPaymentInfo();
    expect(sumPaymentTotal("tipPercent")).toEqual(30);
  });

  //   it("should ", function () {});

  afterEach(function () {
    // teardown logic
    billAmtInput.value = "";
    tipAmtInput.value = "";
    allPayments = {};
    paymentTbody.innerHTML = "";
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
    serverTbody.innerHTML = "";
    paymentId = 0;
  });
});
