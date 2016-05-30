// Compiled using typings@0.6.8
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/56295f5058cac7ae458540423c50ac2dcf9fc711/jsplumb/jquery.jsPlumb.d.ts
// Type definitions for jsPlumb 2.0.7 jQuery adapter (WIP)
// Project: http://jsplumb.org
// Definitions by: Steve Shearn <https://github.com/shearnie/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare var jsPlumb: jsPlumbInstance;

interface jsPlumbInstance {
    setContainer(domelement: any);
	setRenderMode(renderMode: string): string;
	bind(event: string, callback: (obj:any, event:MouseEvent) => void ): void;
	unbind(event?: string): void;
    detach(connection:any);
	ready(callback: () => void): void;
	importDefaults(defaults: Defaults): void;
	Defaults: Defaults;
	restoreDefaults(): void;
	addClass(el: any, clazz: string): void;
	addEndpoint(elem:any, options:any): any;
	removeClass(el: any, clazz: string): void;
	hasClass(el: any, clazz: string): void;
    draggable(el: string, options?: DragOptions): jsPlumbInstance;
    draggable(ids: string[], options?: DragOptions): jsPlumbInstance;
    connect(connection: ConnectParams, referenceParams?: ConnectParams): Connection;
    makeSource(el: string, options: SourceOptions): void;
    makeTarget(el: string, options: TargetOptions): void;
    repaintEverything(): void;
    detachEveryConnection(): void;
	detachAllConnections(el: string): void;
    removeAllEndpoints(el: string, recurse?: boolean): jsPlumbInstance;
    removeAllEndpoints(el: Element, recurse?: boolean): jsPlumbInstance;
    select(params: SelectParams): Connections;
    getConnections(options?: any, flat?: any): any[];
    deleteEndpoint(uuid: string, doNotRepaintAfterwards?: boolean): jsPlumbInstance;
    deleteEndpoint(endpoint: Endpoint, doNotRepaintAfterwards?: boolean): jsPlumbInstance;
    repaint(el: string): jsPlumbInstance;
    repaint(el: Element): jsPlumbInstance;
    getInstance(): jsPlumbInstance;
    setSuspendDrawing(suspended:boolean, repaintAfterwards?:boolean)
	getInstance(defaults: Defaults): jsPlumbInstance;
	getInstanceIndex(): number;
	
    SVG: string;
    CANVAS: string;
    VML: string;
}

interface Defaults {
    Endpoint?: any[];
    Anchors?: [any, any];
	PaintStyle?: PaintStyle;
	HoverPaintStyle?: PaintStyle;
    EndpointHoverStyle: PaintStyle;
	ConnectionsDetachable?: boolean;
	ReattachConnections?: boolean;
	ConnectionOverlays?: any[][];
    Container?: any; // string(selector or id) or element
    DragOptions?: DragOptions;
    Connector: [string,any];
}

interface PaintStyle {
	strokeStyle?: string;
	lineWidth?: number;
    fillStyle?: string;
    dashstyle?: string;
}

interface ArrowOverlay {
	location: number;
	id: string;
	length: number;
	foldback: number;
}

interface LabelOverlay {
	label: string;
	id: string;
	location: number;
}

interface Connections {
	detach(): void;
    each(callback:(connection:Connection) => void);
	length: number;
}

interface ConnectParams {
    source?: any; // string, element or endpoint
    target?: any; // string, element or endpoint
	detachable?: boolean;
	deleteEndpointsOnDetach?: boolean;
	endpoints?:string[];
	anchor?: string;
	anchors?: any[];
	label?: string;
    endpointStyle?: PaintStyle;
    paintStyle?: PaintStyle;
    scope?:string[] | string;
}

interface DragOptions {
	containment?: string;
}

interface SourceOptions {
	endpoint?: any[];
	anchor?: string;
    connector?: any[];
    maxConnections: number;
	connectorStyle?: PaintStyle;
}

interface TargetOptions {
	isTarget?: boolean;
	maxConnections?: number;
	uniqueEndpoint?: boolean;
	deleteEndpointsOnDetach?: boolean;
	endpoint?: string;
	dropOptions?: DropOptions;
	anchor?: any;
}

interface DropOptions {
	hoverClass: string;
}

interface SelectParams {
	scope?: string;
	source?: string;
	target?: string;
}

interface Connection {
    setDetachable(detachable: boolean): void;
    setParameter<T>(name: string, value: T): void;
    endpoints: Endpoint[];
    setPaintSyle(paintStyle:PaintStyle);
    setHoverPaintSyle(paintStyle:PaintStyle);
}

interface Endpoint {
}