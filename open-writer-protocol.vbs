Set shell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")

root = fso.GetParentFolderName(WScript.ScriptFullName)
protocolUrl = ""

If WScript.Arguments.Count > 0 Then
  protocolUrl = WScript.Arguments(0)
End If

command = "cmd.exe /c cd /d " & Quote(root) & " && node scripts\open-writer-protocol.cjs " & Quote(protocolUrl)
shell.Run command, 0, False

Function Quote(value)
  Quote = """" & Replace(value, """", "\""") & """"
End Function
