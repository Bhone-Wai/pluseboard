import {Popover} from "antd";
import {CustomAvatar} from "../custom-avatar";

export function CurrentUser() {
    return (
        <div>
            <Popover
                placement={'bottomRight'}
                trigger={'click'}
                // overlayInnerStyle={{ padding: 0 }}
                // overlayStyle={{ zIndex: 999 }}
            >
                <CustomAvatar />
            </Popover>
        </div>
    )
}