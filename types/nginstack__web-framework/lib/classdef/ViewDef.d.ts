export = ViewDef;
declare function ViewDef(key: string, ...args: any[]): void;
declare class ViewDef {
    constructor(key: string, ...args: any[]);
    protected logger_: Logger;
    fieldClass: (arg0: any) => any;
    lookupWidth: number;
    lookupTableViewWidth: number | null;
    deprecatedInterfaceEnabled: boolean;
    defaultOpenInteraction: string;
    defaultProcess: number;
    defaultExplorerIndex: string[] | string;
    defaultIndex: string[] | string;
    confirmCancel: boolean | undefined;
    confirmDelete: boolean | undefined;
    confirmChange: boolean | undefined;
    imageWidth: number;
    imageHeight: number;
    canDuplicate: boolean;
    globalActions: GlobalActionSet;
    thumbnail: CellThumbnail;
    gridDefinition: any;
    defaultOpenInteractionParameters: string[];
    onBeforeChange: LegacyEvent;
    onAfterChange: LegacyEvent;
    onCalculate: LegacyEvent;
    onChangeView: any;
    onBeforeScroll: any;
    onAfterScroll: any;
    onOpenKey: any;
    onShowLog: any;
    onDefinePermissionsGrid: any;
    onDefineClassesGrid: any;
    onBeforeDuplicate: any;
    onAfterDuplicate: any;
    onLocate: any;
    zoomImageWidth: number;
    zoomImageHeight: number;
    zoomImageOnHover: boolean;
    canNavigate: boolean;
    tooltip: string;
    icon: string;
    field(name: string, type?: string, size?: number, ...args: any[]): Field;
    defineGrid(gridName: string, func: (arg0: any) => any): void;
    toString(): string;
    fileAttributes(vfsKey: number): {
        display: boolean;
        displayName: string;
        displayOrder: number;
        permissionControlEnabled: boolean;
        tooltip: string;
    };
}
declare namespace ViewDef {
    export { Field };
}
import Logger = require('@nginstack/engine/lib/log/Logger.js');
import GlobalActionSet = require('./GlobalActionSet.js');
import CellThumbnail = require('./CellThumbnail.js');
import LegacyEvent = require('@nginstack/engine/lib/event/LegacyEvent.js');
type Field = import('@nginstack/engine/lib/classdef/Field');
