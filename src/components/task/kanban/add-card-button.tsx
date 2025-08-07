import React from "react";
import {Button} from "antd";
import {Text} from "@/components/text";
import {PlusSquareOutlined} from "@ant-design/icons";

type Props = {
    onClick: () => void;
}

export function KanbanAddCardButton({ children, onClick }: React.PropsWithChildren<Props>) {
    return (
        <Button
            size={"large"}
            icon={<PlusSquareOutlined className={'md'} />}
            style={{
                margin: 16,
                backgroundColor: 'white'
            }}
            onClick={onClick}
        >
            {children ?? (
                <Text size={"md"} type={"secondary"}>
                    Add new card
                </Text>
            )}
        </Button>
    )
}