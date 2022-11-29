<template>

   <div class="row justify-content-center">
       <div class="col-md-8">
           <div class="card">
               <div class="card-header bg-dark">
                   <div class="row">
                       <div class="col-md-6">
                       <h5 class="text-light float-start">{{title}}</h5>
                       </div>
                       <div class="col-md-6">
                           <button  id="show-modal" @click="showModal = true" class="btn btn-success btn-sm float-end">
                               New Task
                           </button>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </div>


    <!-- Modal -->
<!--    <div class="modal fade" id="taskModal" tabindex="-1" aria-labelledby="taskModalLabel" aria-hidden="true">-->
<!--        <div class="modal-dialog">-->
<!--            <div class="modal-content">-->
<!--                <div class="modal-header">-->
<!--                    <h1 class="modal-title fs-5" id="taskModalLabel">Modal title</h1>-->
<!--                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>-->
<!--                </div>-->
<!--                <div class="modal-body">-->
<!--                    ...-->
<!--                </div>-->
<!--                <div class="modal-footer">-->
<!--                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>-->
<!--                    <button type="button" class="btn btn-primary">Save changes</button>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--    <div >-->

</template>

<script>


 export default {

    setup:()=>({
        title:'all tasks'
    }),

    name: 'Modal',
    methods:{
        // close() {
        //     this.$emit('close');
        // },
        createTask(){
            $('#taskModal').modal('show');
        },
    },

}

</script>

<!--    <button id="show-modal" @click="showModal = true">Show Modal</button>-->
<!-- use the modal component -->
<!--    <transition name="modal">-->
<!--        <modal v-if="showModal" @close="showModal = false">-->
<!--            &lt;!&ndash;-->
<!--              you can use custom content here to overwrite-->
<!--              default content-->
<!--            &ndash;&gt;-->
<!--            <template v-slot:header>-->
<!--                <h3>custom header</h3>-->
<!--            </template>-->
<!--        </modal>-->
<!--    </transition>-->

<!-- template for the modal component -->
<!--    <div class="modal-mask">-->
<!--        <div class="modal-wrapper">-->
<!--            <div class="modal-container">-->

<!--                <div class="modal-header">-->
<!--                    <slot name="header">-->
<!--                        default header-->
<!--                    </slot>-->
<!--                </div>-->

<!--                <div class="modal-body">-->
<!--                    <slot name="body">-->
<!--                        default body-->
<!--                    </slot>-->
<!--                </div>-->

<!--                <div class="modal-footer">-->
<!--                    <slot name="footer">-->
<!--                        default footer-->
<!--                        <button class="modal-default-button" @click="$emit('close')">-->
<!--                            OK-->
<!--                        </button>-->
<!--                    </slot>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--    <script type="text/x-template" id="modal-template">-->
<!--       -->
<!--    </script>-->




<!--        &lt;!&ndash; Modal &ndash;&gt;-->
<!--        <div v-if="OpenClose" class="modal fade show"-->
<!--             tabindex="-1" aria-labelledby="exampleModalLabel" aria-modal="true" role="dialog"-->
<!--             style="display:block">-->
<!--            <div class="modal-dialog modal-dialog-centered">-->
<!--                <div class="modal-content">-->
<!--                    <div class="modal-header">-->

<!--                        <button type="button" @click="OpenCloseFun()" class="btn-close" ></button>-->
<!--                    </div>-->
<!--                    <div class="modal-body">-->
<!--                        <slot></slot>-->
<!--                    </div>-->
<!--                    <div class="modal-footer">-->
<!--                        <button type="button"  @click="OpenCloseFun()" :class="'btn btn-'+variant" >{{$t('Close')}}</button>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
