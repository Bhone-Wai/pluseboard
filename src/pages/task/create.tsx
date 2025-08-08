import {Form, Input, Modal} from "antd";
import {useModalForm} from "@refinedev/antd";
import {CREATE_TASK_MUTATION} from "@/graphql/mutations";
import {useNavigation} from "@refinedev/core";
import {useSearchParams} from "react-router";

export function TaskCreate() {
    const { formProps, modalProps, close } = useModalForm({
        action: "create",
        defaultVisible: true,
        meta: {
            gqlMutation: CREATE_TASK_MUTATION,
        }
    });

    const [searchParams] = useSearchParams();

    const { list } = useNavigation();

    return (
        <Modal
            {...modalProps}
            onCancel={() => {
                close();

                list('tasks', 'replace');
            }}
            title={'Add new card'}
            width={512}
        >
            <Form
                {...formProps}
                layout={'vertical'}
                onFinish={(values) => {
                    formProps?.onFinish?.({
                        ...values,
                        stageId: searchParams.get('stageId')
                            ? Number(searchParams.get('stageId'))
                            : null,
                        userIds: [],
                    });
                }}
            >
                <Form.Item label={'Title'} name={'title'} rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
}