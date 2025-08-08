import {Modal} from "antd";
import {DeleteButton, useModalForm} from "@refinedev/antd";
import {UPDATE_TASK_MUTATION} from "@/graphql/mutations";
import {useNavigation} from "@refinedev/core";
import {TitleForm} from "@/components/task/form/title";
import {StageForm} from "@/components/task/form/stage";
import {Accordion} from "@/components/accordion";
import {DescriptionHeader, DueDateHeader, UsersHeader} from "@/components/task/form/header";
import {AlignLeftOutlined, FieldTimeOutlined, UsergroupAddOutlined} from "@ant-design/icons";
import {useState} from "react";
import {DueDateForm} from "@/components/task/form/due-date";
import {UsersForm} from "@/components/task/form/users";
import {DescriptionForm} from "@/components/task/form/description";
import {Task} from "@/graphql/schema.types";

export function TaskEdit() {
    const [activeKey, setActiveKey] = useState<string | undefined>();

    const { modalProps, close, queryResult } = useModalForm<Task>({
        action: "edit",
        defaultVisible: true,
        meta: {
            gqlMutation: UPDATE_TASK_MUTATION,
        }
    });

    const { description, dueDate, users, title } = queryResult?.data?.data ?? {};

    const isLoading = queryResult?.isLoading ?? true;

    const { list } = useNavigation();

    return (
        <Modal
            {...modalProps}
            className={'kanban-update-modal'}
            onCancel={() => {
                close();
                list('tasks', 'replace')
            }}
            title={<TitleForm initialValues={{ title }} isLoading={isLoading} />}
            width={586}
            footer={
                <DeleteButton
                    type={"link"}
                    onSuccess={() => {
                        list('tasks', 'replace')
                    }}
                >
                    Delete card
                </DeleteButton>
            }
        >
            <StageForm isLoading={isLoading} />
            <Accordion
                accordionKey={'description'}
                activeKey={activeKey}
                setActive={setActiveKey}
                fallback={<DescriptionHeader description={description} />}
                isLoading={isLoading}
                icon={<AlignLeftOutlined />}
                label={'Description'}
            >
                <DescriptionForm
                    initialValues={{ description }}
                    cancelForm={() => setActiveKey(undefined)}
                />
            </Accordion>

            <Accordion
                accordionKey={'due-date'}
                activeKey={activeKey}
                setActive={setActiveKey}
                fallback={<DueDateHeader dueData={dueDate} />}
                isLoading={isLoading}
                icon={<FieldTimeOutlined />}
                label={'Due date'}
            >
                <DueDateForm
                    initialValues={{ dueDate: dueDate ?? undefined }}
                    cancelForm={() => setActiveKey(undefined)}
                />
            </Accordion>

            <Accordion
                accordionKey={'users'}
                activeKey={activeKey}
                setActive={setActiveKey}
                fallback={<UsersHeader users={users} />}
                isLoading={isLoading}
                icon={<UsergroupAddOutlined />}
                label={'Users'}
            >
                <UsersForm
                    initialValues={{
                        userIds: users?.map((user) => ({
                            label: user.name,
                            value: user.id,
                        })),
                    }}
                    cancelForm={() => setActiveKey(undefined)}
                />
            </Accordion>
        </Modal>
    )
}