describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = "Alice";
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual("Alice");
  });

  it("should not add a new server to allServers if input is blank on submitServerInfo()", function () {
    serverNameInput.value = "";
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  });

  it("should update #servertable on updateServerTable()", function () {
    submitServerInfo();
    updateServerTable();
    let serverData = document.querySelectorAll("#serverTable tbody tr td");
    expect(serverData.length).toEqual(3);
    expect(serverData[0].innerText).toEqual("Alice");
    expect(serverData[1].innerText).toEqual("$0.00");
    expect(serverData[2].innerText).toEqual("X");
  });

  afterEach(function () {
    // teardown logic
    serverId = 0;
    serverTbody.innerHTML = "";
    allServers = {};
  });
});
