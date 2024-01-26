
const fs = require('fs');
const colors = {

    /* General */
    darkBackground: "#303633",
    lightBackground: "#d1b9ff",
    lightBackgroundAccent: "#d3b5e5",
    focusColor: "#ff54d5",
    focusColorAccent: "#ff8de3",
    hover: "#8fdffd",
    hoverAccent: "#5dd1fc",
    accentColor: "#8dffa9",
    badgeForeground: "#faf3dd",
    primaryForeground: "#ffffff",
    secondorryForeground: "#000000",
    //Donno
    inactiveForeground: "#a0a0a0",
    error: "#f44336",
    warning: "#ffa726",
    info: "#29b6f6",
    transparent: "#ff000000",
    linkForeground: "#b9fff4",
    linkForegroundHover: "#0167cd",
    hoverOpaque: "#8fdffd76",
    /* Based on syntax */
    variableColor: "#caffbf",
    keywordColor: "#7cf2d0",
    numberColor: "#eff7f6",
    constantColor: "#eff1db",
    classColor: "#f2d07c",
    functionColor: "#f27c9e",
    stringColor: "#bfedff",
    operatorColor: "#00fff3",
    specialColor: "#00fff3",
    commentColor: "#f9d4bb6e",
    baseColor: "#ffffff",
    propertyColor: "#88ea8d",
    valueColor: "#ffbfca",
    parameterColor: "#42a500",
    constructorColor:"#f35884",
    /* Based on color */
    lightpurple: "#d1b9ff",
    lightPurpleAccent: "#d3b5e5",
    lightPink: "#ff8de3",
    darkpink: "#ff54d5",
    darkestBlue: "#303633",
    lightBlueHover: "#8fdffd",
    lightBlueHoverAccent: "#5dd1fc",
    lightBlueString: stringColor,
    accentGreen: "#8dffa9",
    antiLightPink: "#faf3dd",
    white: "#ffffff",
    black: "#000000",
    linkBlue: "#b9fff4",
    linkBlueActive: "#0167cd",

}

const theme = {
    colors: {
        "foreground": primaryForeground,
        "focusBorder": focusColor,
        "sash.hoverBorder": focusColor,
        "toolbar.hoverBackground": hover,
        "selection.background": focusColor,
        "scrollbar.shadow": white,
        "activityBar.foreground": hover,
        "activityBar.background": darkBackground,
        "activityBar.inactiveForeground": "#ffffff60",
        "activityBarBadge.foreground": badgeForeground,
        "activityBarBadge.background": focusColorAccent,
        "activityBar.border": focusColorAccent,
        "activityBar.activeBorder": focusColor,
        "banner.background": lightBackground,
        "banner.foreground": primaryForeground,
        "sideBar.background": darkBackground,
        "sideBar.foreground": primaryForeground,
        "sideBarSectionHeader.background": "#50514f",
        "sideBarSectionHeader.foreground": lightBackground,
        "sideBarSectionHeader.border": "#cccccc33",
        "sideBarTitle.foreground": focusColorAccent,
        "sideBar.border": focusColorAccent,
        "textPreformat.foreground": "#dffb9d",
        "widget.shadow": focusColorAccent,
        "list.inactiveSelectionBackground": "#FFFFFF10",
        "list.inactiveSelectionForeground": "#cccccc",
        "list.hoverBackground": hover,
        "list.hoverForeground": primaryForeground,
        "list.activeSelectionBackground": focusColor,
        "list.activeSelectionForeground": primaryForeground,
        "tree.indentGuidesStroke": "#ffffff20",
        "list.dropBackground": hoverOpaque,
        "list.highlightForeground": focusColor,
        "list.focusHighlightForeground": hover,
        "list.focusBackground": hoverOpaque,
        "list.focusForeground": primaryForeground,
        "listFilterWidget.background": lightBackground,
        "listFilterWidget.outline": lightBackgroundAccent,
        "listFilterWidget.noMatchesOutline": error,
        "statusBar.foreground": primaryForeground,
        "statusBar.background": darkBackground,
        "statusBarItem.hoverBackground": hover,
        "statusBar.debuggingBackground": "#D26218",
        "statusBar.debuggingForeground": primaryForeground,
        "statusBar.noFolderBackground": "#921592",
        "statusBar.noFolderForeground": primaryForeground,
        "statusBarItem.remoteBackground": accentColor,
        "statusBarItem.remoteForeground": primaryForeground,
        "titleBar.activeBackground": lightBackground,
        "titleBar.activeForeground": primaryForeground,
        "titleBar.inactiveBackground": "#222222",
        "titleBar.inactiveForeground": primaryForeground,
        "titleBar.border": focusColorAccent,
        "menubar.selectionForeground": focusColor,
        "menubar.selectionBackground": hover,
        "menu.foreground": primaryForeground,
        "menu.background": lightBackground,
        "menu.selectionForeground": primaryForeground,
        "menu.selectionBackground": hover,
        "menu.selectionBorder": transparent,
        "menu.separatorBackground": "#ffffff1f",
        "menu.border": "#00000085",
        "button.background": hover,
        "button.foreground": primaryForeground,
        "button.hoverBackground": hoverAccent,
        "button.secondaryForeground": primaryForeground,
        "button.secondaryBackground": "#3a3d41",
        "button.secondaryHoverBackground": "#45494e",
        "input.background": hover,
        "input.border": transparent,
        "input.foreground": primaryForeground,
        "input.placeholderForeground": "#00000062",
        "quickInput.foreground": primaryForeground,
        "quickInput.background": lightBackground,
        "quickInputList.focusBackground": focusColor,
        "quickInputList.focusForeground": primaryForeground,
        "quickInputList.focusIconForeground": primaryForeground,
        "inputOption.activeBackground": focusColor,
        "inputOption.activeBorder": "#007acc00",
        "inputOption.activeForeground": primaryForeground,
        "inputOption.hoverBackground": hoverAccent,
        "textLink.foreground": linkForeground,
        "textLink.activeForeground": linkForegroundHover,
        "editor.background": darkBackground,
        "editor.foreground": primaryForeground,
        "editorLightBulb.foreground": "#fcffc6",
        "editorLightBulbAutoFix.foreground": primaryForeground,
        "editorLightBulbAi.foreground": specialColor,
        "editorLineNumber.foreground": focusColorAccent,
        "editorCursor.foreground": "#aeafad",
        "editorCursor.background": secondorryForeground,
        "editor.selectionBackground": "#34e9fd68",
        "editor.selectionHighlightBorder": transparent,
        "editor.selectionHighlightBackground": "#e26a90d6",
        "editor.inactiveSelectionBackground": "#8fe0fd6c",
        "editor.findMatchBackground": "#e26a90d6",
        "editor.findMatchBorder": transparent,
        "editor.findMatchHighlightBackground": transparent,
        "editor.findMatchHighlightBorder": focusColor,
        "editor.findRangeHighlightBackground": transparent,
        "editor.findRangeHighlightBorder": hover,
        "editor.rangeHighlightBorder": hover,
        "editor.rangeHighlightBackground": transparent,
        "editor.hoverHighlightBackground": transparent,
        "editor.wordHighlightTextBackground": transparent,
        "editor.wordHighlightTextBorder": hoverAccent,
        "editor.wordHighlightBackground": "#8fe0fd00",
        "editor.wordHighlightBorder": transparent,
        "editor.wordHighlightStrongBackground": transparent,
        "editor.wordHighlightStrongBorder": accentColor,
        "editor.lineHighlightBorder": hover,
        "editorLineNumber.activeForeground": focusColor,
        "editorLink.activeForeground": linkForeground,
        "editorRuler.foreground": "#5a5a5a",
        "editorBracketMatch.background": "#8fe0fd00",
        "editorBracketMatch.border": focusColor,
        "editorBracketHighlight.foreground1": accentColor,
        "editorBracketHighlight.foreground2": "#f9fb00",
        "editorBracketHighlight.foreground3": "#a0c600",
        "editorBracketHighlight.foreground4": "#529100",
        "editorBracketHighlight.foreground5": "#005b00",
        "editorBracketHighlight.foreground6": "#d4720a",
        "editorBracketHighlight.unexpectedBracket.foreground": error,
        "editor.foldBackground": "#FFFFFF0F",
        "editorOverviewRuler.background": "#25252500",
        "editorOverviewRuler.border": "#7f7f7f4d",
        "editorError.foreground": error,
        "editorError.background": "#ff0c0000",
        "editorError.border": "#ffffff00",
        "editorWarning.foreground": warning,
        "editorWarning.background": "#A9904000",
        "editorWarning.border": "#ffffff00",
        "editorInfo.foreground": info,
        "editorInfo.background": "#4490BF00",
        "editorInfo.border": "#4490bf00",
        "editorGutter.background": transparent,
        "editorGutter.modifiedBackground": info,
        "editorGutter.addedBackground": "#66bb6a",
        "editorGutter.deletedBackground": error,
        "editorGutter.foldingControlForeground": accentColor,
        "editorCodeLens.foreground": "#B9B9B9",
        "editorGroup.border": "#151515",
        "diffEditor.insertedTextBackground": "#66bb6a8d",
        "diffEditor.removedTextBackground": "#f443364a",
        "diffEditor.border": "#444444",
        "panel.background": darkBackground,
        "panel.border": focusColorAccent,
        "panelTitle.activeBorder": focusColor,
        "panelTitle.activeForeground": hover,
        "panelTitle.inactiveForeground": focusColorAccent,
        "panelSection.border": "#FFFFFF33",
        "badge.background": focusColorAccent,
        "badge.foreground": "#faf3dd",
        "terminal.foreground": primaryForeground,
        "terminal.selectionBackground": hoverOpaque,
        "terminalCursor.background": focusColor,
        "terminalCursor.foreground": primaryForeground,
        "terminal.border": "#FFFFFF33",
        "terminal.ansiBlack": secondorryForeground,
        "terminal.ansiBlue": "#2472c8",
        "terminal.ansiBrightBlack": "#666666",
        "terminal.ansiBrightBlue": "#3b8eea",
        "terminal.ansiBrightCyan": "#29b8db",
        "terminal.ansiBrightGreen": "#23d18b",
        "terminal.ansiBrightMagenta": "#d670d6",
        "terminal.ansiBrightRed": "#f14c4c",
        "terminal.ansiBrightWhite": "#e5e5e5",
        "terminal.ansiBrightYellow": "#f5f543",
        "terminal.ansiCyan": "#11a8cd",
        "terminal.ansiGreen": "#0dbc79",
        "terminal.ansiMagenta": "#bc3fbc",
        "terminal.ansiRed": "#cd3131",
        "terminal.ansiWhite": "#D4D4D4",
        "terminal.ansiYellow": "#e5e510",
        "breadcrumb.background": "#30363337",
        "breadcrumb.foreground": primaryForeground,
        "breadcrumb.focusForeground": hover,
        "editorGroupHeader.border": transparent,
        "editorGroupHeader.tabsBackground": darkBackground,
        "editorGroupHeader.tabsBorder": transparent,
        "tab.activeForeground": primaryForeground,
        "tab.border": "#00000050",
        "tab.activeBackground": "#ffffff10",
        "tab.activeBorder": focusColor,
        "tab.activeBorderTop": transparent,
        "tab.inactiveBackground": "#2d2d2d",
        "tab.inactiveForeground": "#999999",
        "tab.hoverBorder": hover,
        "extensionButton.hoverBackground": hoverAccent,
        "scrollbarSlider.background": focusColorAccent,
        "scrollbarSlider.hoverBackground": hover,
        "scrollbarSlider.activeBackground": focusColor,
        "progressBar.background": accentColor,
        "editorWidget.foreground": secondorryForeground,
        "editorWidget.background": lightBackground,
        "editorWidget.resizeBorder": "#5F5F5F",
        "pickerGroup.border": hoverAccent,
        "pickerGroup.foreground": "#011627",
        "debugToolBar.background": darkBackground,
        "debugToolBar.border": lightBackground,
        "notifications.foreground": primaryForeground,
        "notifications.background": darkBackground,
        "notificationToast.border": "#474747",
        "notificationsErrorIcon.foreground": error,
        "notificationsWarningIcon.foreground": warning,
        "notificationsInfoIcon.foreground": info,
        "notificationCenter.border": lightBackground,
        "notificationCenterHeader.foreground": focusColorAccent,
        "notificationCenterHeader.background": "#2d2d2d",
        "notifications.border": focusColorAccent,
        "gitDecoration.addedResourceForeground": "#81b88b",
        "gitDecoration.conflictingResourceForeground": "#6c6cc4",
        "gitDecoration.deletedResourceForeground": error,
        "gitDecoration.ignoredResourceForeground": "#8c8c8c",
        "gitDecoration.modifiedResourceForeground": "#e2c08d",
        "gitDecoration.stageDeletedResourceForeground": error,
        "gitDecoration.stageModifiedResourceForeground": "#e2c08d",
        "gitDecoration.submoduleResourceForeground": "#8db9e2",
        "gitDecoration.untrackedResourceForeground": "#73c991",
        "editorMarkerNavigation.background": lightBackground,
        "editorMarkerNavigationError.background": error,
        "editorMarkerNavigationWarning.background": warning,
        "editorMarkerNavigationInfo.background": info,
        "merge.currentHeaderBackground": "#367366",
        "merge.currentContentBackground": "#27403B",
        "merge.incomingHeaderBackground": "#395F8F",
        "merge.incomingContentBackground": "#28384B",
        "merge.commonHeaderBackground": "#383838",
        "merge.commonContentBackground": "#282828",
        "editorSuggestWidget.background": lightBackground,
        "editorSuggestWidget.border": focusColor,
        "editorSuggestWidget.foreground": secondorryForeground,
        "editorSuggestWidget.highlightForeground": focusColor,
        "editorSuggestWidget.selectedBackground": focusColor,
        "editorSuggestWidget.focusHighlightForeground": hover,
        "editorSuggestWidget.selectedForeground": secondorryForeground,
        "editorHoverWidget.foreground": secondorryForeground,
        "editorHoverWidget.background": lightBackground,
        "editorHoverWidget.border": "#454545",
        "editorHoverWidget.statusBarBackground": focusColorAccent,
        "peekView.border": "#1D7AE6",
        "peekViewEditor.background": "#101010",
        "peekViewEditorGutter.background": "#101010",
        "peekViewEditor.matchHighlightBackground": hoverOpaque,
        "peekViewEditor.matchHighlightBorder": focusColor,
        "peekViewResult.background": lightBackground,
        "peekViewResult.fileForeground": secondorryForeground,
        "peekViewResult.lineForeground": "#796262",
        "peekViewResult.matchHighlightBackground": "#ff54d578",
        "peekViewResult.selectionBackground": "#3399ff33",
        "peekViewResult.selectionForeground": primaryForeground,
        "peekViewTitle.background": lightBackground,
        "peekViewTitleDescription.foreground": secondorryForeground,
        "peekViewTitleLabel.foreground": focusColor,
        "icon.foreground": focusColorAccent,
        "checkbox.background": hoverAccent,
        "checkbox.foreground": secondorryForeground,
        "checkbox.border": transparent,
        "checkbox.selectBorder": focusColor,
        "dropdown.background": hoverAccent,
        "dropdown.foreground": secondorryForeground,
        "dropdown.border": transparent,
        "minimapGutter.addedBackground": "#66bb6a",
        "minimapGutter.modifiedBackground": info,
        "minimapGutter.deletedBackground": error,
        "minimap.findMatchHighlight": "#e26a9100",
        "minimap.selectionHighlight": hoverOpaque,
        "minimap.errorHighlight": error,
        "minimap.warningHighlight": warning,
        "minimap.infoHighlight": info,
        "minimap.background": darkBackground,
        "sideBar.dropBackground": hoverOpaque,
        "editorGroup.emptyBackground": darkBackground,
        "statusBarItem.activeBackground": "#FFFFFF25",
        "settings.headerForeground": secondorryForeground,
        "settings.focusedRowBackground": "#ffffff07",
        "search.resultsInfoForeground": focusColorAccent,
        "breadcrumb.activeSelectionForeground": hover,
        "editorGutter.commentRangeForeground": accentColor,
        "debugExceptionWidget.background": darkBackground,
        "debugExceptionWidget.border": lightBackground,
        "debugConsoleInputIcon.foreground": primaryForeground,
        "debugConsole.errorForeground": error,
        "debugConsole.infoForeground": info,
        "debugConsole.sourceForeground": primaryForeground,
        "debugConsole.warningForeground": warning,
        "welcomePage.tileBackground": lightBackground,
        "welcomePage.tileHoverBackground": hover,
        "welcomePage.progress.foreground": focusColorAccent,
        "welcomePage.progress.background": focusColor,
        "extensionButton.prominentForeground": "#ff0000"
    },

    "semanticHighlighting": true,
	"semanticTokenColors": {
		"class": classColor,
		"enumMember": specialColor,
		"property": propertyColor,
		"field": propertyColor,
		"method": functionColor,
		"function": functionColor,
		"constructor": constructorColor,
		"variable": variableColor,
		"parameter": parameterColor,
		"string": stringColor,
		"number": numberColor,
		"variable.constant": constantColor,
		"variable.defaultLibrary": classColor,
		"operator": specialColor,
		"comment": commentColor,
		"keyword": keywordColor,
	},


    "tokenColors": [
        /*  HTML Fix 
            tags: keyword
            attribute: property
            text: base
            style-attribute-value: variable
            color-value: constant

            
        */
        {
            "name": "HTML tags",
            "scope": "entity.name.tag.html",
            "settings": {
                "foreground": keywordColor,
            }
        },
        {
            "name": "HTML attribute",
            "scope": "entity.other.attribute-name.html",
            "settings": {
                "foreground": propertyColor
            }
        },
        {
            "name": "HTML text",
            "scope": "text.html.derivative",
            "settings": {
                "foreground": baseColor
            }
        },
        {
            "name": "HTML style-attribute-value",
            "scope": "source.css",
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "HTML color-value",
            "scope": "text.html.derivative meta.embedded.block.html source.css meta.property-list.css meta.property-value.css support.constant.color.w3c-extended-color-name.css",
            "settings": {
                "foreground": constantColor,
            }
        },
        {
            "name": "illegal",
            "scope": "invalid.illegal.bad-ampersand.html",
            "settings": {
                "foreground": errorColor
            }
        },
        /* laravel-blade(dunno) */
        {
            "name": "laravel blade tag",
            "scope": "text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",
            "settings": {
                "foreground": keywordColor,
            }
        }, 
        {
            "name": "laravel blade @",
            "scope": "text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",
            "settings": {
                "foreground": keywordColor,
            }
        },


        /*  CSS Fix 
            tags: keyword
            class: class
            id: function
            property-name: variable
            semi-colon: base
            property-value: value
            numeric: number
            parameter-media: parameter

        */
        {
            "name": "CSS tags",
            "scope": "entity.name.tag.css",
            "settings": {
                "foreground": keywordColor,
            }
        },
        {
            "name": "CSS class name",
            "scope": "entity.other.attribute-name.class.css",
            "settings": {
                "foreground": classColor,
            }
        },
        {
            "name": "CSS id",
            "scope": "entity.other.attribute-name.id.css",
            "settings": {
                "foreground": functionColor,
            }
        },
        {
            "name": "CSS property-name",
            "scope": "support.type.property-name.css",
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "Terminal semi-colon",
            "scope": "punctuation.terminator.rule.css",
            "settings": {
                "foreground": baseColor
            }
        },
        {
            "name": "CSS property value",
            "scope": "support.constant.property-value.css",
            "settings": {
                "foreground": valueColor
            }
        },
        {
            "name": "CSS nymeric",
            "scope": "constant.numeric.css",
            "settings": {
                "foreground": numberColor
            }
        },
        {
            "name": "CSS parameter-media",
            "scope": "support.type.property-name.media.css",
            "settings": {
              "foreground": parameterColor
            }
        },
        {
            "name": "css comma",
            "scope": "punctuation.separator.list.comma.css",
            "settings": {
                "foreground": focusColorAccent
            }
        },
        {
            "name": "css color standard name",
            "scope": "support.constant.color.w3c-standard-color-name.css",
            "settings": {
                "foreground": constantColor
            }
        },
        {
            "name": "css property-name",
            "scope": "support.type.vendored.property-name.css",
            "settings": {
                "foreground": specialColor
            }
        },
        {
            "name": "styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",
            "scope": [
                "entity.other.attribute-name.pseudo-element",
                "entity.other.attribute-name.pseudo-class"
            ],
            "settings": {
                "foreground": specialColor
            }
        },


        /* Java Fix */
        {
            "name": "Java property/field",
            "scope": [
                "source.java meta.class.java meta.class.body.java",
                "source.java meta.class.java meta.class.body.java meta.definition.variable.java variable.other.definition.java",
                "variable.other.object.property.java",

            ],
            "settings": {
                "foreground": propertyColor
            }
        },
        {
            "name": "Java Class",
            "scope": "entity.name.type.class.java",
            "settings": {
                "foreground": classColor,
            }
        },
        {
            "name": "Java Object",
            "scope": "variable.other.object.java",
            "settings": {
                "foreground": classColor,
            }
        },
        {
            "name": "Java ",
            "scope": "",
            "settings": {
                "foreground": classColor,
            }
        },
        {
			"name": "Java parameter",
			"scope": "variable.parameter.java",
			"settings": {
				"foreground": parameterColor
			}
		},
		{
			"name": "Java method body",
			"scope": "meta.method.body.java",
			"settings": {
				"foreground": white
			}
        },
        
        /* javascript Fix */



        /* Others */


        {
            "name": "unison punctuation",
            "scope": "punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "haskell variable generic-type",
            "scope": "variable.other.generic-type.haskell",
            "settings": {
                "foreground": keywordColor,
            }
        },
        {
            "name": "haskell storage type",
            "scope": "storage.type.haskell",
            "settings": {
                "foreground": numberColor
            }
        },
        {
            "name": "support.variable.magic.python",
            "scope": "support.variable.magic.python",
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "punctuation.separator.parameters.python",
            "scope": "punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python",
            "settings": {
                "foreground": focusColorAccent
            }
        },
        {
            "name": "variable.parameter.function.language.special.self.python",
            "scope": "variable.parameter.function.language.special.self.python",
            "settings": {
                "foreground": constantColor,
            }
        },
        {
            "name": "storage.modifier.lifetime.rust",
            "scope": "storage.modifier.lifetime.rust",
            "settings": {
                "foreground": focusColorAccent
            }
        },
        {
            "name": "support.function.std.rust",
            "scope": "support.function.std.rust",
            "settings": {
                "foreground": functionColor,
            }
        },
        {
            "name": "entity.name.lifetime.rust",
            "scope": "entity.name.lifetime.rust",
            "settings": {
                "foreground": constantColor,
            }
        },
        {
            "name": "variable.language.rust",
            "scope": "variable.language.rust",
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "support.constant.edge",
            "scope": "support.constant.edge",
            "settings": {
                "foreground": keywordColor,
            }
        },
        {
            "name": "regexp constant character-class",
            "scope": "constant.other.character-class.regexp",
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "regexp operator.quantifier",
            "scope": "keyword.operator.quantifier.regexp",
            "settings": {
                "foreground": numberColor
            }
        },
        {
            "name": "punctuation.definition",
            "scope": "punctuation.definition.string.begin,punctuation.definition.string.end",
            "settings": {
                "foreground": stringColor
            }
        },
        {
            "name": "Text",
            "scope": "variable.parameter.function",
            "settings": {
                "foreground": focusColorAccent
            }
        },
        {
            "name": "Comment Markup Link",
            "scope": "comment markup.link",
            "settings": {
                "foreground": specialColor
            }
        },
        {
            "name": "markup diff",
            "scope": "markup.changed.diff",
            "settings": {
                "foreground": constantColor,
            }
        },
        {
            "name": "diff",
            "scope": "meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",
            "settings": {
                "foreground": functionColor,
            }
        },
        {
            "name": "inserted.diff",
            "scope": "markup.inserted.diff",
            "settings": {
                "foreground": stringColor
            }
        },
        {
            "name": "deleted.diff",
            "scope": "markup.deleted.diff",
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "c++ function",
            "scope": "meta.function.c,meta.function.cpp",
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "c++ block",
            "scope": "punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",
            "settings": {
                "foreground": focusColorAccent
            }
        },
        {
            "name": "js/ts punctuation separator key-value",
            "scope": "punctuation.separator.key-value",
            "settings": {
                "foreground": focusColorAccent
            }
        },
        {
            "name": "js/ts import keyword",
            "scope": "keyword.operator.expression.import",
            "settings": {
                "foreground": functionColor,
            }
        },
        {
            "name": "math js/ts",
            "scope": "support.constant.math",
            "settings": {
                "foreground": constantColor,
            }
        },
        {
            "name": "math property js/ts",
            "scope": "support.constant.property.math",
            "settings": {
                "foreground": numberColor
            }
        },
        {
            "name": "js/ts variable.other.constant",
            "scope": "variable.other.constant",
            "settings": {
                "foreground": constantColor,
            }
        },
        {
            "name": "java type",
            "scope": [
                "storage.type.annotation.java",
                "storage.type.object.array.java"
            ],
            "settings": {
                "foreground": constantColor,
            }
        },
        {
            "name": "java source",
            "scope": "source.java",
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "java modifier.import",
            "scope": "punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java",
            "settings": {
                "foreground": focusColorAccent
            }
        },
        {
            "name": "java modifier.import",
            "scope": "meta.method.java",
            "settings": {
                "foreground": functionColor,
            }
        },
        {
            "name": "java modifier.import",
            "scope": "storage.modifier.import.java,storage.type.java,storage.type.generic.java",
            "settings": {
                "foreground": constantColor,
            }
        },
        {
            "name": "java instanceof",
            "scope": "keyword.operator.instanceof.java",
            "settings": {
                "foreground": keywordColor,
            }
        },
        {
            "name": "java variable.name",
            "scope": "meta.definition.variable.name.java",
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "operator logical",
            "scope": "keyword.operator.logical",
            "settings": {
                "foreground": specialColor
            }
        },
        {
            "name": "operator bitwise",
            "scope": "keyword.operator.bitwise",
            "settings": {
                "foreground": specialColor
            }
        },
        {
            "name": "operator channel",
            "scope": "keyword.operator.channel",
            "settings": {
                "foreground": specialColor
            }
        },
        {
            "name": "support.constant.property-value.scss",
            "scope": "support.constant.property-value.scss",
            "settings": {
                "foreground": numberColor
            }
        },
        {
            "name": "CSS/SCSS/LESS Operators",
            "scope": "keyword.operator.css,keyword.operator.scss,keyword.operator.less",
            "settings": {
                "foreground": specialColor
            }
        },
        {
            "name": "css color standard name",
            "scope": "support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",
            "settings": {
                "foreground": numberColor
            }
        },
        {
            "name": "js/ts module",
            "scope": "support.module.node,support.type.object.module,support.module.node",
            "settings": {
                "foreground": constantColor,
            }
        },
        {
            "name": "entity.name.type.module",
            "scope": "entity.name.type.module",
            "settings": {
                "foreground": constantColor,
            }
        },
        {
            "name": "js variable readwrite",
            "scope": "variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node",
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "js/ts json",
            "scope": "support.constant.json",
            "settings": {
                "foreground": numberColor
            }
        },
        {
            "name": "js/ts Keyword",
            "scope": [
                "keyword.operator.expression.instanceof",
                "keyword.operator.new",
                "keyword.operator.ternary",
                "keyword.operator.optional",
                "keyword.operator.expression.keyof"
            ],
            "settings": {
                "foreground": keywordColor,
            }
        },
        {
            "name": "js/ts console",
            "scope": "support.type.object.console",
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "js/ts support.variable.property.process",
            "scope": "support.variable.property.process",
            "settings": {
                "foreground": numberColor
            }
        },
        {
            "name": "js console function",
            "scope": "entity.name.function,support.function.console",
            "settings": {
                "foreground": functionColor,
            }
        },
        {
            "name": "keyword.operator.misc.rust",
            "scope": "keyword.operator.misc.rust",
            "settings": {
                "foreground": focusColorAccent
            }
        },
        {
            "name": "keyword.operator.sigil.rust",
            "scope": "keyword.operator.sigil.rust",
            "settings": {
                "foreground": keywordColor,
            }
        },
        {
            "name": "operator",
            "scope": "keyword.operator.delete",
            "settings": {
                "foreground": keywordColor,
            }
        },
        {
            "name": "js dom",
            "scope": "support.type.object.dom",
            "settings": {
                "foreground": specialColor
            }
        },
        {
            "name": "js dom variable",
            "scope": "support.variable.dom,support.variable.property.dom",
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "keyword.operator",
            "scope": "keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational",
            "settings": {
                "foreground": specialColor
            }
        },
        {
            "name": "C operator assignment",
            "scope": "keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp",
            "settings": {
                "foreground": keywordColor,
            }
        },
        {
            "name": "Punctuation",
            "scope": "punctuation.separator.delimiter",
            "settings": {
                "foreground": focusColorAccent
            }
        },
        {
            "name": "Other punctuation .c",
            "scope": "punctuation.separator.c,punctuation.separator.cpp",
            "settings": {
                "foreground": keywordColor,
            }
        },
        {
            "name": "C type posix-reserved",
            "scope": "support.type.posix-reserved.c,support.type.posix-reserved.cpp",
            "settings": {
                "foreground": specialColor
            }
        },
        {
            "name": "keyword.operator.sizeof.c",
            "scope": "keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",
            "settings": {
                "foreground": keywordColor,
            }
        },
        {
            "name": "python parameter",
            "scope": "variable.parameter.function.language.python",
            "settings": {
                "foreground": numberColor
            }
        },
        {
            "name": "python type",
            "scope": "support.type.python",
            "settings": {
                "foreground": specialColor
            }
        },
        {
            "name": "python logical",
            "scope": "keyword.operator.logical.python",
            "settings": {
                "foreground": keywordColor,
            }
        },
        {
            "name": "pyCs",
            "scope": "variable.parameter.function.python",
            "settings": {
                "foreground": numberColor
            }
        },
        {
            "name": "python block",
            "scope": "punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",
            "settings": {
                "foreground": focusColorAccent
            }
        },
        {
            "name": "python function-call.generic",
            "scope": "meta.function-call.generic.python",
            "settings": {
                "foreground": functionColor,
            }
        },
        {
            "name": "python placeholder reset to normal string",
            "scope": "constant.character.format.placeholder.other.python",
            "settings": {
                "foreground": numberColor
            }
        },
        {
            "name": "Operators",
            "scope": "keyword.operator",
            "settings": {
                "foreground": focusColorAccent
            }
        },
        {
            "name": "Compound Assignment Operators",
            "scope": "keyword.operator.assignment.compound",
            "settings": {
                "foreground": keywordColor,
            }
        },
        {
            "name": "Compound Assignment Operators js/ts",
            "scope": "keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",
            "settings": {
                "foreground": specialColor
            }
        },
        {
            "name": "Keywords",
            "scope": "keyword",
            "settings": {
                "foreground": keywordColor,
            }
        },
        {
            "name": "Namespaces",
            "scope": "entity.name.namespace",
            "settings": {
                "foreground": constantColor,
            }
        },
        {
            "name": "Variables",
            "scope": "variable",
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "Variables",
            "scope": "variable.c",
            "settings": {
                "foreground": focusColorAccent
            }
        },
        {
            "name": "Language variables",
            "scope": "variable.language",
            "settings": {
                "foreground": constantColor,
            }
        },
        {
            "name": "Java Variables",
            "scope": "token.variable.parameter.java",
            "settings": {
                "foreground": focusColorAccent
            }
        },
        {
            "name": "Java Imports",
            "scope": "import.storage.java",
            "settings": {
                "foreground": constantColor,
            }
        },
        {
            "name": "Packages",
            "scope": "token.package.keyword",
            "settings": {
                "foreground": keywordColor,
            }
        },
        {
            "name": "Packages",
            "scope": "token.package",
            "settings": {
                "foreground": focusColorAccent
            }
        },
        {
            "name": "Functions",
            "scope": [
                "entity.name.function",
                "meta.require",
                "support.function.any-method",
                "variable.function"
            ],
            "settings": {
                "foreground": functionColor,
            }
        },
        {
            "name": "Classes",
            "scope": "entity.name.type.namespace",
            "settings": {
                "foreground": constantColor,
            }
        },
        {
            "name": "Classes",
            "scope": "support.class, entity.name.type.class",
            "settings": {
                "foreground": classColor,
            }
        },
        {
            "name": "Class name",
            "scope": "entity.name.class.identifier.namespace.type",
            "settings": {
                "foreground": constantColor,
            }
        },
        {
            "name": "Class name",
            "scope": [
                "entity.name.class",
                "variable.other.class.js",
                "variable.other.class.ts"
            ],
            "settings": {
                "foreground": classColor,
            }
        },
        {
            "name": "Class name php",
            "scope": "variable.other.class.php",
            "settings": {
                "foreground": classColor,
            }
        },
        {
            "name": "Type Name",
            "scope": "entity.name.type",
            "settings": {
                "foreground": constantColor,
            }
        },
        {
            "name": "Keyword Control",
            "scope": "keyword.control",
            "settings": {
                "foreground": keywordColor,
            }
        },
        {
            "name": "Control Elements",
            "scope": "control.elements, keyword.operator.less",
            "settings": {
                "foreground": numberColor
            }
        },
        {
            "name": "Methods",
            "scope": "keyword.other.special-method",
            "settings": {
                "foreground": functionColor,
            }
        },
        {
            "name": "Storage",
            "scope": "storage",
            "settings": {
                "foreground": keywordColor,
            }
        },
        {
            "name": "Storage JS TS",
            "scope": "token.storage",
            "settings": {
                "foreground": keywordColor,
            }
        },
        {
            "name": "Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void",
            "scope": "keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void",
            "settings": {
                "foreground": keywordColor,
            }
        },
        {
            "name": "Java Storage",
            "scope": "token.storage.type.java",
            "settings": {
                "foreground": constantColor,
            }
        },
        {
            "name": "Support",
            "scope": "support.function",
            "settings": {
                "foreground": specialColor
            }
        },
        {
            "name": "Support type",
            "scope": "support.type.property-name",
            "settings": {
                "foreground": propertyColor
            }
        },
        {
            "name": "Support type",
            "scope": "support.constant.property-value",
            "settings": {
                "foreground": focusColorAccent
            }
        },
        {
            "name": "Support type",
            "scope": "support.constant.font-name",
            "settings": {
                "foreground": numberColor
            }
        },
        {
            "name": "Meta tag",
            "scope": "meta.tag",
            "settings": {
                "foreground": focusColorAccent
            }
        },
        {
            "name": "Strings",
            "scope": "string",
            "settings": {
                "foreground": stringColor
            }
        },
        {
            "name": "Inherited Class",
            "scope": "entity.other.inherited-class",
            "settings": {
                "foreground": classColor,
            }
        },
        {
            "name": "Constant other symbol",
            "scope": "constant.other.symbol",
            "settings": {
                "foreground": specialColor
            }
        },
        {
            "name": "Integers",
            "scope": "constant.numeric",
            "settings": {
                "foreground": numberColor
            }
        },
        {
            "name": "Constants",
            "scope": "constant",
            "settings": {
                "foreground": numberColor
            }
        },
        {
            "name": "Constants",
            "scope": "punctuation.definition.constant",
            "settings": {
                "foreground": numberColor
            }
        },
        {
            "name": "Tags",
            "scope": "entity.name.tag",
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "Attributes",
            "scope": "entity.other.attribute-name",
            "settings": {
                "foreground": numberColor
            }
        },
        {
            "name": "Attribute IDs",
            "scope": "entity.other.attribute-name.id",
            "settings": {
                "foreground": functionColor,
            }
        },
        {
            "name": "Selector",
            "scope": "meta.selector",
            "settings": {
                "foreground": keywordColor,
            }
        },
        {
            "name": "Headings",
            "scope": "markup.heading",
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "Headings",
            "scope": "markup.heading punctuation.definition.heading, entity.name.section",
            "settings": {
                "foreground": functionColor,
            }
        },
        {
            "name": "Units",
            "scope": "keyword.other.unit",
            "settings": {
                "foreground": specialColor
            }
        },
        {
            "name": "Bold",
            "scope": "markup.bold,todo.bold",
            "settings": {
                "foreground": numberColor
            }
        },
        {
            "name": "Bold",
            "scope": "punctuation.definition.bold",
            "settings": {
                "foreground": constantColor,
            }
        },
        {
            "name": "markup Italic",
            "scope": "markup.italic, punctuation.definition.italic,todo.emphasis",
            "settings": {
                "foreground": keywordColor,
            }
        },
        {
            "name": "emphasis md",
            "scope": "emphasis md",
            "settings": {
                "foreground": keywordColor,
            }
        },
        {
            "name": "[VSCODE-CUSTOM] Markdown headings",
            "scope": "entity.name.section.markdown",
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "[VSCODE-CUSTOM] Markdown heading Punctuation Definition",
            "scope": "punctuation.definition.heading.markdown",
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "punctuation.definition.list.begin.markdown",
            "scope": "punctuation.definition.list.begin.markdown",
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "[VSCODE-CUSTOM] Markdown heading setext",
            "scope": "markup.heading.setext",
            "settings": {
                "foreground": focusColorAccent
            }
        },
        {
            "name": "[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",
            "scope": "punctuation.definition.bold.markdown",
            "settings": {
                "foreground": numberColor
            }
        },
        {
            "name": "[VSCODE-CUSTOM] Markdown Inline Raw",
            "scope": "markup.inline.raw.markdown",
            "settings": {
                "foreground": stringColor
            }
        },
        {
            "name": "[VSCODE-CUSTOM] Markdown Inline Raw",
            "scope": "markup.inline.raw.string.markdown",
            "settings": {
                "foreground": stringColor
            }
        },
        {
            "name": "[VSCODE-CUSTOM] Markdown List Punctuation Definition",
            "scope": "punctuation.definition.list.markdown",
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "[VSCODE-CUSTOM] Markdown Punctuation Definition String",
            "scope": [
                "punctuation.definition.string.begin.markdown",
                "punctuation.definition.string.end.markdown",
                "punctuation.definition.metadata.markdown"
            ],
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "beginning.punctuation.definition.list.markdown",
            "scope": [
                "beginning.punctuation.definition.list.markdown"
            ],
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "[VSCODE-CUSTOM] Markdown Punctuation Definition Link",
            "scope": "punctuation.definition.metadata.markdown",
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "[VSCODE-CUSTOM] Markdown Underline Link/Image",
            "scope": "markup.underline.link.markdown,markup.underline.link.image.markdown",
            "settings": {
                "foreground": keywordColor,
            }
        },
        {
            "name": "[VSCODE-CUSTOM] Markdown Link Title/Description",
            "scope": "string.other.link.title.markdown,string.other.link.description.markdown",
            "settings": {
                "foreground": functionColor,
            }
        },
        {
            "name": "Regular Expressions",
            "scope": "string.regexp",
            "settings": {
                "foreground": specialColor
            }
        },
        {
            "name": "Escape Characters",
            "scope": "constant.character.escape",
            "settings": {
                "foreground": specialColor
            }
        },
        {
            "name": "Embedded",
            "scope": "punctuation.section.embedded, variable.interpolation",
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "Embedded",
            "scope": "punctuation.section.embedded.begin,punctuation.section.embedded.end",
            "settings": {
                "foreground": keywordColor,
            }
        },
        {
            "name": "illegal",
            "scope": "invalid.illegal",
            "settings": {
                "foreground": baseColor
            }
        },
        {
            "name": "Broken",
            "scope": "invalid.broken",
            "settings": {
                "foreground": baseColor
            }
        },
        {
            "name": "Deprecated",
            "scope": "invalid.deprecated",
            "settings": {
                "foreground": baseColor
            }
        },
        {
            "name": "Unimplemented",
            "scope": "invalid.unimplemented",
            "settings": {
                "foreground": baseColor
            }
        },
        {
            "name": "Source Json Meta Structure Dictionary Json > String Quoted Json",
            "scope": "source.json meta.structure.dictionary.json > string.quoted.json",
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",
            "scope": "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",
            "scope": "source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",
            "settings": {
                "foreground": stringColor
            }
        },
        {
            "name": "Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json",
            "scope": "source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",
            "settings": {
                "foreground": specialColor
            }
        },
        {
            "name": "[VSCODE-CUSTOM] JSON Property Name",
            "scope": "support.type.property-name.json",
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "[VSCODE-CUSTOM] JSON Punctuation for Property Name",
            "scope": "support.type.property-name.json punctuation",
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "use statement for other classes",
            "scope": "support.other.namespace.use.php,support.other.namespace.use-as.php,support.other.namespace.php,entity.other.alias.php,meta.interface.php",
            "settings": {
                "foreground": constantColor,
            }
        },
        {
            "name": "error suppression",
            "scope": "keyword.operator.error-control.php",
            "settings": {
                "foreground": keywordColor,
            }
        },
        {
            "name": "php instanceof",
            "scope": "keyword.operator.type.php",
            "settings": {
                "foreground": keywordColor,
            }
        },
        {
            "name": "style double quoted array index normal begin",
            "scope": "punctuation.section.array.begin.php",
            "settings": {
                "foreground": focusColorAccent
            }
        },
        {
            "name": "style double quoted array index normal end",
            "scope": "punctuation.section.array.end.php",
            "settings": {
                "foreground": focusColorAccent
            }
        },
        {
            "name": "php illegal.non-null-typehinted",
            "scope": "invalid.illegal.non-null-typehinted.php",
            "settings": {
                "foreground": "#f44747"
            }
        },
        {
            "name": "php types",
            "scope": "storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",
            "settings": {
                "foreground": constantColor,
            }
        },
        {
            "name": "php call-function",
            "scope": "meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",
            "settings": {
                "foreground": functionColor,
            }
        },
        {
            "name": "php function-resets",
            "scope": "punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",
            "settings": {
                "foreground": focusColorAccent
            }
        },
        {
            "name": "support php constants",
            "scope": "support.constant.core.rust",
            "settings": {
                "foreground": numberColor
            }
        },
        {
            "name": "support php constants",
            "scope": "support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",
            "settings": {
                "foreground": numberColor
            }
        },
        {
            "name": "php goto",
            "scope": "entity.name.goto-label.php,support.other.php",
            "settings": {
                "foreground": functionColor,
            }
        },
        {
            "name": "php logical/bitwise operator",
            "scope": "keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",
            "settings": {
                "foreground": specialColor
            }
        },
        {
            "name": "php regexp operator",
            "scope": "keyword.operator.regexp.php",
            "settings": {
                "foreground": keywordColor,
            }
        },
        {
            "name": "php comparison",
            "scope": "keyword.operator.comparison.php",
            "settings": {
                "foreground": specialColor
            }
        },
        {
            "name": "php heredoc/nowdoc",
            "scope": "keyword.operator.heredoc.php,keyword.operator.nowdoc.php",
            "settings": {
                "foreground": keywordColor,
            }
        },
        {
            "name": "python function decorator @",
            "scope": "meta.function.decorator.python",
            "settings": {
                "foreground": functionColor,
            }
        },
        {
            "name": "python function support",
            "scope": "support.token.decorator.python,meta.function.decorator.identifier.python",
            "settings": {
                "foreground": specialColor
            }
        },
        {
            "name": "parameter function js/ts",
            "scope": "function.parameter",
            "settings": {
                "foreground": focusColorAccent
            }
        },
        {
            "name": "brace function",
            "scope": "function.brace",
            "settings": {
                "foreground": focusColorAccent
            }
        },
        {
            "name": "parameter function ruby cs",
            "scope": "function.parameter.ruby, function.parameter.cs",
            "settings": {
                "foreground": focusColorAccent
            }
        },
        {
            "name": "constant.language.symbol.ruby",
            "scope": "constant.language.symbol.ruby",
            "settings": {
                "foreground": specialColor
            }
        },
        {
            "name": "rgb-value",
            "scope": "rgb-value",
            "settings": {
                "foreground": specialColor
            }
        },
        {
            "name": "rgb value",
            "scope": "inline-color-decoration rgb-value",
            "settings": {
                "foreground": numberColor
            }
        },
        {
            "name": "rgb value less",
            "scope": "less rgb-value",
            "settings": {
                "foreground": numberColor
            }
        },
        {
            "name": "sass selector",
            "scope": "selector.sass",
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "ts primitive/builtin types",
            "scope": "support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx",
            "settings": {
                "foreground": constantColor,
            }
        },
        {
            "name": "block scope",
            "scope": "block.scope.end,block.scope.begin",
            "settings": {
                "foreground": focusColorAccent
            }
        },
        {
            "name": "cs storage type",
            "scope": "storage.type.cs",
            "settings": {
                "foreground": constantColor,
            }
        },
        {
            "name": "cs local variable",
            "scope": "entity.name.variable.local.cs",
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "scope": "token.info-token",
            "settings": {
                "foreground": functionColor,
            }
        },
        {
            "scope": "token.warn-token",
            "settings": {
                "foreground": numberColor
            }
        },
        {
            "scope": "token.error-token",
            "settings": {
                "foreground": "#f44747"
            }
        },
        {
            "scope": "token.debug-token",
            "settings": {
                "foreground": keywordColor,
            }
        },
        {
            "name": "String interpolation",
            "scope": [
                "punctuation.definition.template-expression.begin",
                "punctuation.definition.template-expression.end",
                "punctuation.section.embedded"
            ],
            "settings": {
                "foreground": keywordColor,
            }
        },
        {
            "name": "Reset JavaScript string interpolation expression",
            "scope": [
                "meta.template.expression"
            ],
            "settings": {
                "foreground": focusColorAccent
            }
        },
        {
            "name": "Import module JS",
            "scope": [
                "keyword.operator.module"
            ],
            "settings": {
                "foreground": keywordColor,
            }
        },
        {
            "name": "js Flowtype",
            "scope": [
                "support.type.type.flowtype"
            ],
            "settings": {
                "foreground": functionColor,
            }
        },
        {
            "name": "js Flow",
            "scope": [
                "support.type.primitive"
            ],
            "settings": {
                "foreground": constantColor,
            }
        },
        {
            "name": "js class prop",
            "scope": [
                "meta.property.object"
            ],
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "js func parameter",
            "scope": [
                "variable.parameter.function.js"
            ],
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "js template literals begin",
            "scope": [
                "keyword.other.template.begin"
            ],
            "settings": {
                "foreground": stringColor
            }
        },
        {
            "name": "js template literals end",
            "scope": [
                "keyword.other.template.end"
            ],
            "settings": {
                "foreground": stringColor
            }
        },
        {
            "name": "js template literals variable braces begin",
            "scope": [
                "keyword.other.substitution.begin"
            ],
            "settings": {
                "foreground": stringColor
            }
        },
        {
            "name": "js template literals variable braces end",
            "scope": [
                "keyword.other.substitution.end"
            ],
            "settings": {
                "foreground": stringColor
            }
        },
        {
            "name": "js operator.assignment",
            "scope": [
                "keyword.operator.assignment"
            ],
            "settings": {
                "foreground": specialColor
            }
        },
        {
            "name": "go operator",
            "scope": [
                "keyword.operator.assignment.go"
            ],
            "settings": {
                "foreground": constantColor,
            }
        },
        {
            "name": "go operator",
            "scope": [
                "keyword.operator.arithmetic.go",
                "keyword.operator.address.go"
            ],
            "settings": {
                "foreground": keywordColor,
            }
        },
        {
            "name": "Go package name",
            "scope": [
                "entity.name.package.go"
            ],
            "settings": {
                "foreground": constantColor,
            }
        },
        {
            "name": "elm prelude",
            "scope": [
                "support.type.prelude.elm"
            ],
            "settings": {
                "foreground": specialColor
            }
        },
        {
            "name": "elm constant",
            "scope": [
                "support.constant.elm"
            ],
            "settings": {
                "foreground": numberColor
            }
        },
        {
            "name": "template literal",
            "scope": [
                "punctuation.quasi.element"
            ],
            "settings": {
                "foreground": keywordColor,
            }
        },
        {
            "name": "html/pug (jade) escaped characters and entities",
            "scope": [
                "constant.character.entity"
            ],
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "Clojure globals",
            "scope": [
                "entity.global.clojure"
            ],
            "settings": {
                "foreground": constantColor,
            }
        },
        {
            "name": "Clojure symbols",
            "scope": [
                "meta.symbol.clojure"
            ],
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "Clojure constants",
            "scope": [
                "constant.keyword.clojure"
            ],
            "settings": {
                "foreground": specialColor
            }
        },
        {
            "name": "CoffeeScript Function Argument",
            "scope": [
                "meta.arguments.coffee",
                "variable.parameter.function.coffee"
            ],
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "Ini Default Text",
            "scope": [
                "source.ini"
            ],
            "settings": {
                "foreground": stringColor
            }
        },
        {
            "name": "Makefile prerequisities",
            "scope": [
                "meta.scope.prerequisites.makefile"
            ],
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "Makefile text colour",
            "scope": [
                "source.makefile"
            ],
            "settings": {
                "foreground": constantColor,
            }
        },
        {
            "name": "Groovy import names",
            "scope": [
                "storage.modifier.import.groovy"
            ],
            "settings": {
                "foreground": constantColor,
            }
        },
        {
            "name": "Groovy Methods",
            "scope": [
                "meta.method.groovy"
            ],
            "settings": {
                "foreground": functionColor,
            }
        },
        {
            "name": "Groovy Variables",
            "scope": [
                "meta.definition.variable.name.groovy"
            ],
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "Groovy Inheritance",
            "scope": [
                "meta.definition.class.inherited.classes.groovy"
            ],
            "settings": {
                "foreground": stringColor
            }
        },
        {
            "name": "HLSL Semantic",
            "scope": [
                "support.variable.semantic.hlsl"
            ],
            "settings": {
                "foreground": constantColor,
            }
        },
        {
            "name": "HLSL Types",
            "scope": [
                "support.type.texture.hlsl",
                "support.type.sampler.hlsl",
                "support.type.object.hlsl",
                "support.type.object.rw.hlsl",
                "support.type.fx.hlsl",
                "support.type.object.hlsl"
            ],
            "settings": {
                "foreground": keywordColor,
            }
        },
        {
            "name": "SQL Variables",
            "scope": [
                "text.variable",
                "text.bracketed"
            ],
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "types",
            "scope": [
                "support.type.swift",
                "support.type.vb.asp"
            ],
            "settings": {
                "foreground": constantColor,
            }
        },
        {
            "name": "heading 1, keyword",
            "scope": [
                "entity.name.function.xi"
            ],
            "settings": {
                "foreground": constantColor,
            }
        },
        {
            "name": "heading 2, callable",
            "scope": [
                "entity.name.class.xi"
            ],
            "settings": {
                "foreground": specialColor
            }
        },
        {
            "name": "heading 3, property",
            "scope": [
                "constant.character.character-class.regexp.xi"
            ],
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "heading 4, type, class, interface",
            "scope": [
                "constant.regexp.xi"
            ],
            "settings": {
                "foreground": keywordColor,
            }
        },
        {
            "name": "heading 5, enums, preprocessor, constant, decorator",
            "scope": [
                "keyword.control.xi"
            ],
            "settings": {
                "foreground": specialColor
            }
        },
        {
            "name": "heading 6, number",
            "scope": [
                "invalid.xi"
            ],
            "settings": {
                "foreground": focusColorAccent
            }
        },
        {
            "name": "string",
            "scope": [
                "beginning.punctuation.definition.quote.markdown.xi"
            ],
            "settings": {
                "foreground": stringColor
            }
        },
        {
            "name": "comments",
            "scope": [
                "beginning.punctuation.definition.list.markdown.xi"
            ],
            "settings": {
                "foreground": specialColor
            }
        },
        {
            "name": "link",
            "scope": [
                "constant.character.xi"
            ],
            "settings": {
                "foreground": functionColor,
            }
        },
        {
            "name": "accent",
            "scope": [
                "accent.xi"
            ],
            "settings": {
                "foreground": functionColor,
            }
        },
        {
            "name": "wikiword",
            "scope": [
                "wikiword.xi"
            ],
            "settings": {
                "foreground": numberColor
            }
        },
        {
            "name": "language operators like '+', '-' etc",
            "scope": [
                "constant.other.color.rgb-value.xi"
            ],
            "settings": {
                "foreground": baseColor
            }
        },
        {
            "name": "elements to dim",
            "scope": [
                "punctuation.definition.tag.xi"
            ],
            "settings": {
                "foreground": specialColor
            }
        },
        {
            "name": "C++/C#",
            "scope": [
                "entity.name.label.cs",
                "entity.name.scope-resolution.function.call",
                "entity.name.scope-resolution.function.definition"
            ],
            "settings": {
                "foreground": constantColor,
            }
        },
        {
            "name": "Markdown underscore-style headers",
            "scope": [
                "entity.name.label.cs",
                "markup.heading.setext.1.markdown",
                "markup.heading.setext.2.markdown"
            ],
            "settings": {
                "foreground": variableColor
            }
        },
        {
            "name": "meta.brace.square",
            "scope": [
                " meta.brace.square"
            ],
            "settings": {
                "foreground": focusColorAccent
            }
        },
        {
            "name": "Comments",
            "scope": "comment, punctuation.definition.comment",
            "settings": {
                "foreground": specialColor,
                "fontStyle": "italic"
            }
        },
        {
            "name": "[VSCODE-CUSTOM] Markdown Quote",
            "scope": "markup.quote.markdown",
            "settings": {
                "foreground": specialColor
            }
        },
        {
            "name": "punctuation.definition.block.sequence.item.yaml",
            "scope": "punctuation.definition.block.sequence.item.yaml",
            "settings": {
                "foreground": focusColorAccent
            }
        },
        {
            "scope": [
                "constant.language.symbol.elixir"
            ],
            "settings": {
                "foreground": specialColor
            }
        },
        {
            "name": "js/ts italic",
            "scope": "entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super",
            "settings": {
                "fontStyle": "italic"
            }
        },
        {
            "name": "comment",
            "scope": "comment.line.double-slash,comment.block.documentation",
            "settings": {
                "fontStyle": "italic"
            }
        },
        {
            "name": "Python Keyword Control",
            "scope": "keyword.control.import.python,keyword.control.flow.python",
            "settings": {
                "fontStyle": "italic"
            }
        },
        {
            "name": "markup.italic.markdown",
            "scope": "markup.italic.markdown",
            "settings": {
                "fontStyle": "italic"
            }
        }
    ],
}
const themeJson = JSON.stringify(theme, null, 2);
fs.writeFileSync('Candy-Shop-Eclipse-color-theme.json', themeJson);