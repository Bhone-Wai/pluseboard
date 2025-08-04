import {Badge, List, Skeleton} from "antd";

export function UpcomingEventsSkeleton() {
    return (
        <List.Item>
            <List.Item.Meta
                avatar={<Badge color={'transparent'} />}
                title={
                    <Skeleton.Button
                        active
                        style={{
                            height: '14px',
                        }}
                    />
                }
                description={
                <Skeleton.Button
                    active
                    style={{
                        width: '300px',
                        height: '16px',
                        marginTop: '8px',
                    }}
                />
                }
            />
        </List.Item>
    );
}