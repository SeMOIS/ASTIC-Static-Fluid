function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ncCIdPLdMm":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
SheetsSet('Nama', player.GetVar('TextEntry'));
}

