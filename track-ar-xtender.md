initial loaders and greeter

main ar interactions

final configs (btns and share and stuff)

common components
Text - {
"name" : "Header",
}

tomatoes,rings - randomized positions for user to interact with instead of defining the position.

### json

    - all the sections
    - all the elements

### currently developed

```json
{
  "initial formed": {
    "name": "Kelogss game one",
    "vertion": "1.0",
    "screen": [
      {
        "name": "Loader Screen",
        "pageSections": [
          {
            "name": "Background",
            "type": "image | id mapped to describe this element",
            "elements": [
              {
                "name": "color",
                "key": "colorCompKey",
                "elements": [
                  {
                    "values": [
                      {
                        "value": "red",
                        "code": "#red"
                      },
                      {
                        "value": "cyan",
                        "code": "#cyanCode"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "with Actions recursive": {
    "name": "FINAL",
    "pageSections": [
      {
        "icon": "icon to describe this element",
        "name": "btns",
        "actions": [
          {
            "name": "replay",
            "actions": [
              {
                "name": "select style",
                "comp": "styleComp",
                "values": [
                  {
                    "type": "btn-style1",
                    "value": "style name"
                  },
                  {
                    "type": "btn-style2",
                    "value": "style name"
                  }
                ]
              },
              {
                "name": "select style",
                "comp": "styleComp",
                "values": [
                  {
                    "type": "btn-style1",
                    "value": "style name"
                  },
                  {
                    "type": "btn-style2",
                    "value": "style name"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}
```
