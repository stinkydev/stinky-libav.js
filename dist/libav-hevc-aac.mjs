let LibAV;(function(){function t(e){e=e||[0,97,115,109,1,0,0,0];if(typeof WebAssembly!=="object"||typeof WebAssembly.instantiate!=="function")return false;try{var e=new WebAssembly.Module(new Uint8Array(e));if(e instanceof WebAssembly.Module)return new WebAssembly.Instance(e)instanceof WebAssembly.Instance}catch(e){}return false}function r(){try{var e=new WebAssembly.Memory({initial:1,maximum:1,shared:true});if(!(e.buffer instanceof SharedArrayBuffer))return false;return true}catch(e){}return false}var c;var n=typeof process!=="undefined";if(typeof LibAV==="undefined")LibAV={};c=LibAV;if(!c.base){c.base=import.meta.url;c.base=c.base.replace(/\/[^\/]*$/,"")}c.isWebAssemblySupported=t;c.isThreadingSupported=r;function A(e){e=e||{};var _=!e.nowasm&&t();var a=e.yesthreads&&_&&!e.nothreads&&r();if(!_)return"asm";else if(a)return"thr";else return"wasm"}c.target=A;c.VER="5.4.6.1.1";c.CONFIG="hevc-aac";c.DBG="";c.factories={};var m={};m.i64tof64=function(e,_){if(!_&&e>=0)return e;if(_===-1&&e<0)return e;return _*4294967296+e+(e<0?4294967296:0)};m.f64toi64=function(e){return[~~e,Math.floor(e/4294967296)]};m.i64ToBigInt=function(e,_){var a=new DataView(new ArrayBuffer(8));a.setInt32(0,e,true);a.setInt32(4,_,true);return a.getBigInt64(0,true)};m.bigIntToi64=function(e){var _=new DataView(new ArrayBuffer(8));_.setBigInt64(0,e,true);return[_.getInt32(0,true),_.getInt32(4,true)]};function e(e,_){if(typeof _===undefined)_=0;var a=_;e.forEach(function(e){m[e]=a++})}m.AV_OPT_SEARCH_CHILDREN=1;e(["AVMEDIA_TYPE_UNKNOWN","AVMEDIA_TYPE_VIDEO","AVMEDIA_TYPE_AUDIO","AVMEDIA_TYPE_DATA","AVMEDIA_TYPE_SUBTITLE","AVMEDIA_TYPE_ATTACHMENT"],-1);e(["AV_SAMPLE_FMT_NONE","AV_SAMPLE_FMT_U8","AV_SAMPLE_FMT_S16","AV_SAMPLE_FMT_S32","AV_SAMPLE_FMT_FLT","AV_SAMPLE_FMT_DBL","AV_SAMPLE_FMT_U8P","AV_SAMPLE_FMT_S16P","AV_SAMPLE_FMT_S32P","AV_SAMPLE_FMT_FLTP","AV_SAMPLE_FMT_DBLP","AV_SAMPLE_FMT_S64","AV_SAMPLE_FMT_S64P","AV_SAMPLE_FMT_NB"],-1);e(["AV_PIX_FMT_NONE","AV_PIX_FMT_YUV420P","AV_PIX_FMT_YUYV422","AV_PIX_FMT_RGB24","AV_PIX_FMT_BGR24","AV_PIX_FMT_YUV422P","AV_PIX_FMT_YUV444P","AV_PIX_FMT_YUV410P","AV_PIX_FMT_YUV411P","AV_PIX_FMT_GRAY8","AV_PIX_FMT_MONOWHITE","AV_PIX_FMT_MONOBLACK","AV_PIX_FMT_PAL8","AV_PIX_FMT_YUVJ420P","AV_PIX_FMT_YUVJ422P","AV_PIX_FMT_YUVJ444P","AV_PIX_FMT_UYVY422","AV_PIX_FMT_UYYVYY411","AV_PIX_FMT_BGR8","AV_PIX_FMT_BGR4","AV_PIX_FMT_BGR4_BYTE","AV_PIX_FMT_RGB8","AV_PIX_FMT_RGB4","AV_PIX_FMT_RGB4_BYTE","AV_PIX_FMT_NV12","AV_PIX_FMT_NV21","AV_PIX_FMT_ARGB","AV_PIX_FMT_RGBA","AV_PIX_FMT_ABGR","AV_PIX_FMT_BGRA","AV_PIX_FMT_GRAY16BE","AV_PIX_FMT_GRAY16LE","AV_PIX_FMT_YUV440P","AV_PIX_FMT_YUVJ440P","AV_PIX_FMT_YUVA420P","AV_PIX_FMT_RGB48BE","AV_PIX_FMT_RGB48LE","AV_PIX_FMT_RGB565BE","AV_PIX_FMT_RGB565LE","AV_PIX_FMT_RGB555BE","AV_PIX_FMT_RGB555LE","AV_PIX_FMT_BGR565BE","AV_PIX_FMT_BGR565LE","AV_PIX_FMT_BGR555BE","AV_PIX_FMT_BGR555LE"],-1);m.AVIO_FLAG_READ=1;m.AVIO_FLAG_WRITE=2;m.AVIO_FLAG_READ_WRITE=3;m.AVIO_FLAG_NONBLOCK=8;m.AVIO_FLAG_DIRECT=32768;m.AVFMT_FLAG_NOBUFFER=64;m.AVFMT_FLAG_FLUSH_PACKETS=512;m.AVSEEK_FLAG_BACKWARD=1;m.AVSEEK_FLAG_BYTE=2;m.AVSEEK_FLAG_ANY=4;m.AVSEEK_FLAG_FRAME=8;m.AVDISCARD_NONE=-16;m.AVDISCARD_DEFAULT=0;m.AVDISCARD_NONREF=8;m.AVDISCARD_BIDIR=16;m.AVDISCARD_NONINTRA=24;m.AVDISCARD_NONKEY=32;m.AVDISCARD_ALL=48;m.AV_LOG_QUIET=-8;m.AV_LOG_PANIC=0;m.AV_LOG_FATAL=8;m.AV_LOG_ERROR=16;m.AV_LOG_WARNING=24;m.AV_LOG_INFO=32;m.AV_LOG_VERBOSE=40;m.AV_LOG_DEBUG=48;m.AV_LOG_TRACE=56;m.AV_PKT_FLAG_KEY=1;m.AV_PKT_FLAG_CORRUPT=2;m.AV_PKT_FLAG_DISCARD=4;m.AV_PKT_FLAG_TRUSTED=8;m.AV_PKT_FLAG_DISPOSABLE=16;e(["E2BIG","EPERM","EADDRINUSE","EADDRNOTAVAIL","EAFNOSUPPORT","EAGAIN","EALREADY","EBADF","EBADMSG","EBUSY","ECANCELED","ECHILD","ECONNABORTED","ECONNREFUSED","ECONNRESET","EDEADLOCK","EDESTADDRREQ","EDOM","EDQUOT","EEXIST","EFAULT","EFBIG","EHOSTUNREACH","EIDRM","EILSEQ","EINPROGRESS","EINTR","EINVAL","EIO","EISCONN","EISDIR","ELOOP","EMFILE","EMLINK","EMSGSIZE","EMULTIHOP","ENAMETOOLONG","ENETDOWN","ENETRESET","ENETUNREACH","ENFILE","ENOBUFS","ENODEV","ENOENT"],1);m.AVERROR_EOF=-541478725;Object.assign(c,m);c.LibAV=function(_){_=_||{};var e=_.base||c.base;var a=A(_);var t="hevc-aac";if(a==="asm"){t=_.variant||c.variant||"hevc-aac"}var r=true;if(r&&(_.noes6||c.noes6))r=false;var o=_.toImport||c.toImport||e+"/libav-5.4.6.1.1-"+t+"."+a+"."+(r?"mjs":"js");var i;var s="direct";if(a==="thr")s="threads";else if(!n&&!_.noworker&&typeof Worker!=="undefined")s="worker";return Promise.all([]).then(function(){if(_.factory||c.factory)return _.factory||c.factory;if(c.factories[o])return c.factories[o];if(s==="worker"){}else if(r){return import(o).then(function(e){c.factories[o]=e.default;return e.default})}else if(n){return c.factories[o]=require(o)}else if(typeof importScripts!=="undefined"){importScripts(o);return c.factories[o]=LibAVFactory}else{return new Promise(function(e,_){var a=document.createElement("script");a.src=o;a.addEventListener("load",e);a.addEventListener("error",_);a.async=true;document.body.appendChild(a)}).then(function(){return c.factories[o]=LibAVFactory})}}).then(function(e){if(s==="worker"){i={};i.worker=new Worker(o,{type:r?"module":"classic"});i.worker.postMessage({config:{variant:_.variant||c.variant,wasmurl:_.wasmurl||c.wasmurl}});return new Promise(function(e,_){i.on=1;i.handlers={onready:[function(){e()},null],onwrite:[function(e){if(i.onwrite)i.onwrite.apply(i,e)},null],onblockread:[function(_){try{var e=null;if(i.onblockread)e=i.onblockread.apply(i,_);if(e&&e.then&&e.catch){e.catch(function(e){i.ff_block_reader_dev_send(_[0],_[1],null,{error:e})})}}catch(e){i.ff_block_reader_dev_send(_[0],_[1],null,{error:e})}},null]};i.c=function(){var t=Array.prototype.slice.call(arguments);var r=[];for(var e=0;e<t.length;e++){if(t[e]&&t[e].libavjsTransfer)r.push.apply(r,t[e].libavjs_create_main_thread)}return new Promise(function(e,_){var a=i.on++;t=[a].concat(t);i.handlers[a]=[e,_];i.worker.postMessage(t,r)})};function a(e){var _=e.data[0];var a=i.handlers[_];if(a){if(e.data[2])a[0](e.data[3]);else a[1](e.data[3]);if(typeof _==="number")delete i.handlers[_]}}i.worker.onmessage=a;i.terminate=function(){i.worker.terminate()}})}else if(s==="threads"){return Promise.all([]).then(function(){return e({wasmurl:_.warmurl||c.wasmurl,variant:_.variant||c.variant})}).then(function(e){i=e;var _=i.libavjs_create_main_thread();var o=i.PThread.pthreads[_];var a=0;var r=1;var s={};var c=null;var t=new Promise(function(e){c=e});i.c=function(){var t=Array.prototype.slice.call(arguments);return new Promise(function(e,_){var a=r++;t=[a].concat(t);s[a]=[e,_];o.postMessage({c:"libavjs_run",a:t})})};var n=o.onmessage;o.onmessage=function(e){if(e.data&&e.data.c==="libavjs_ret"){var _=e.data.a;var a=s[_[0]];if(a){if(_[2])a[0](_[3]);else a[1](_[3]);delete s[_[0]]}}else if(e.data&&e.data.c==="libavjs_wait_reader"){if(i.readerDevReady(e.data.fd)){o.postMessage({c:"libavjs_wait_reader",fd:e.data.fd})}else{var t=i.fdName(e.data.fd);var r=i.ff_reader_dev_waiters[t];if(!r){r=i.ff_reader_dev_waiters[t]=[]}r.push(function(){o.postMessage({c:"libavjs_wait_reader",fd:e.data.fd})})}}else if(e.data&&e.data.c==="libavjs_ready"){c()}else{return n.apply(this,arguments)}};i.terminate=function(){i.PThread.unusedWorkers.concat(i.PThread.runningWorkers).forEach(function(e){e.terminate()})};return t})}else{return Promise.all([]).then(function(){return e({wasmurl:_.wasmurl||c.wasmurl,variant:_.variant||c.variant})}).then(function(e){i=e;i.worker=false;i.c=function(a){var t=Array.prototype.slice.call(arguments,1);return new Promise(function(e,_){try{e(i[a].apply(i,t))}catch(e){_(e)}})};i.terminate=function(){}})}}).then(function(){function e(e){e.forEach(function(e){i[e]=function(){return i.c.apply(i,[e].concat(Array.prototype.slice.call(arguments)))}})}function _(e){e.forEach(function(e){var r=i[e+"_sync"]=i[e];i[e]=function(){var t=arguments;return new Promise(function(e,_){try{var a=r.apply(i,t);if(typeof a==="object"&&a!==null&&a.then)a.then(e).catch(_);else e(a)}catch(e){_(e)}})}})}var a=["av_get_bytes_per_sample","av_compare_ts_js","av_opt_set","av_opt_set_int_list_js","av_frame_alloc","av_frame_clone","av_frame_free","av_frame_get_buffer","av_frame_make_writable","av_frame_ref","av_frame_unref","ff_frame_rescale_ts_js","av_log_get_level","av_log_set_level","av_packet_alloc","av_packet_clone","av_packet_free","av_packet_new_side_data","av_packet_ref","av_packet_rescale_ts_js","av_packet_unref","av_strdup","av_buffersink_get_frame","av_buffersink_get_time_base_num","av_buffersink_get_time_base_den","av_buffersink_set_frame_size","av_buffersrc_add_frame_flags","avfilter_free","avfilter_get_by_name","avfilter_graph_alloc","avfilter_graph_config","avfilter_graph_create_filter_js","avfilter_graph_free","avfilter_graph_parse","avfilter_inout_alloc","avfilter_inout_free","avfilter_link","avcodec_alloc_context3","avcodec_close","avcodec_descriptor_get","avcodec_descriptor_get_by_name","avcodec_descriptor_next","avcodec_find_decoder","avcodec_find_decoder_by_name","avcodec_find_encoder","avcodec_find_encoder_by_name","avcodec_free_context","avcodec_get_name","avcodec_open2","avcodec_open2_js","avcodec_parameters_alloc","avcodec_parameters_copy","avcodec_parameters_free","avcodec_parameters_from_context","avcodec_parameters_to_context","avcodec_receive_frame","avcodec_receive_packet","avcodec_send_frame","avcodec_send_packet","av_find_input_format","avformat_alloc_context","avformat_alloc_output_context2_js","avformat_close_input","avformat_find_stream_info","avformat_flush","avformat_free_context","avformat_new_stream","avformat_open_input","avformat_open_input_js","avformat_seek_file","avformat_seek_file_min","avformat_seek_file_max","avformat_seek_file_approx","avformat_write_header","avio_open2_js","avio_close","avio_flush","av_find_best_stream","av_get_sample_fmt_name","av_grow_packet","av_interleaved_write_frame","av_packet_make_writable","av_pix_fmt_desc_get","av_read_frame","av_shrink_packet","av_write_frame","av_write_trailer","av_dict_copy_js","av_dict_free","av_dict_set_js","sws_getContext","sws_freeContext","sws_scale_frame","AVPacketSideData_data","AVPacketSideData_size","AVPacketSideData_type","AVPixFmtDescriptor_comp_depth","ff_error","ff_nothing","calloc","close","dup2","free","malloc","mallinfo_uordblks","open","strerror","libavjs_with_swscale","libavjs_create_main_thread","ffmpeg_main","ffprobe_main","AVFrame_channel_layout","AVFrame_channel_layout_s","AVFrame_channel_layouthi","AVFrame_channel_layouthi_s","AVFrame_channels","AVFrame_channels_s","AVFrame_channel_layoutmask","AVFrame_channel_layoutmask_s","AVFrame_ch_layout_nb_channels","AVFrame_ch_layout_nb_channels_s","AVFrame_crop_bottom","AVFrame_crop_bottom_s","AVFrame_crop_left","AVFrame_crop_left_s","AVFrame_crop_right","AVFrame_crop_right_s","AVFrame_crop_top","AVFrame_crop_top_s","AVFrame_data_a","AVFrame_data_a_s","AVFrame_format","AVFrame_format_s","AVFrame_height","AVFrame_height_s","AVFrame_key_frame","AVFrame_key_frame_s","AVFrame_linesize_a","AVFrame_linesize_a_s","AVFrame_nb_samples","AVFrame_nb_samples_s","AVFrame_pict_type","AVFrame_pict_type_s","AVFrame_pts","AVFrame_pts_s","AVFrame_ptshi","AVFrame_ptshi_s","AVFrame_sample_aspect_ratio_num","AVFrame_sample_aspect_ratio_num_s","AVFrame_sample_aspect_ratio_den","AVFrame_sample_aspect_ratio_den_s","AVFrame_sample_aspect_ratio_s","AVFrame_sample_rate","AVFrame_sample_rate_s","AVFrame_time_base_num","AVFrame_time_base_num_s","AVFrame_time_base_den","AVFrame_time_base_den_s","AVFrame_time_base_s","AVFrame_width","AVFrame_width_s","AVPixFmtDescriptor_flags","AVPixFmtDescriptor_flags_s","AVPixFmtDescriptor_log2_chroma_h","AVPixFmtDescriptor_log2_chroma_h_s","AVPixFmtDescriptor_log2_chroma_w","AVPixFmtDescriptor_log2_chroma_w_s","AVPixFmtDescriptor_nb_components","AVPixFmtDescriptor_nb_components_s","AVCodec_sample_fmts","AVCodec_sample_fmts_s","AVCodec_sample_fmts_a","AVCodec_sample_fmts_a_s","AVCodec_supported_samplerates","AVCodec_supported_samplerates_s","AVCodec_supported_samplerates_a","AVCodec_supported_samplerates_a_s","AVCodec_type","AVCodec_type_s","AVCodecContext_codec_id","AVCodecContext_codec_id_s","AVCodecContext_codec_type","AVCodecContext_codec_type_s","AVCodecContext_bit_rate","AVCodecContext_bit_rate_s","AVCodecContext_bit_ratehi","AVCodecContext_bit_ratehi_s","AVCodecContext_channel_layout","AVCodecContext_channel_layout_s","AVCodecContext_channel_layouthi","AVCodecContext_channel_layouthi_s","AVCodecContext_channels","AVCodecContext_channels_s","AVCodecContext_channel_layoutmask","AVCodecContext_channel_layoutmask_s","AVCodecContext_ch_layout_nb_channels","AVCodecContext_ch_layout_nb_channels_s","AVCodecContext_extradata","AVCodecContext_extradata_s","AVCodecContext_extradata_size","AVCodecContext_extradata_size_s","AVCodecContext_frame_size","AVCodecContext_frame_size_s","AVCodecContext_framerate_num","AVCodecContext_framerate_num_s","AVCodecContext_framerate_den","AVCodecContext_framerate_den_s","AVCodecContext_framerate_s","AVCodecContext_gop_size","AVCodecContext_gop_size_s","AVCodecContext_height","AVCodecContext_height_s","AVCodecContext_keyint_min","AVCodecContext_keyint_min_s","AVCodecContext_level","AVCodecContext_level_s","AVCodecContext_max_b_frames","AVCodecContext_max_b_frames_s","AVCodecContext_pix_fmt","AVCodecContext_pix_fmt_s","AVCodecContext_profile","AVCodecContext_profile_s","AVCodecContext_rc_max_rate","AVCodecContext_rc_max_rate_s","AVCodecContext_rc_max_ratehi","AVCodecContext_rc_max_ratehi_s","AVCodecContext_rc_min_rate","AVCodecContext_rc_min_rate_s","AVCodecContext_rc_min_ratehi","AVCodecContext_rc_min_ratehi_s","AVCodecContext_sample_aspect_ratio_num","AVCodecContext_sample_aspect_ratio_num_s","AVCodecContext_sample_aspect_ratio_den","AVCodecContext_sample_aspect_ratio_den_s","AVCodecContext_sample_aspect_ratio_s","AVCodecContext_sample_fmt","AVCodecContext_sample_fmt_s","AVCodecContext_sample_rate","AVCodecContext_sample_rate_s","AVCodecContext_time_base_num","AVCodecContext_time_base_num_s","AVCodecContext_time_base_den","AVCodecContext_time_base_den_s","AVCodecContext_time_base_s","AVCodecContext_qmax","AVCodecContext_qmax_s","AVCodecContext_qmin","AVCodecContext_qmin_s","AVCodecContext_width","AVCodecContext_width_s","AVCodecDescriptor_id","AVCodecDescriptor_id_s","AVCodecDescriptor_long_name","AVCodecDescriptor_long_name_s","AVCodecDescriptor_mime_types_a","AVCodecDescriptor_mime_types_a_s","AVCodecDescriptor_name","AVCodecDescriptor_name_s","AVCodecDescriptor_props","AVCodecDescriptor_props_s","AVCodecDescriptor_type","AVCodecDescriptor_type_s","AVCodecParameters_bit_rate","AVCodecParameters_bit_rate_s","AVCodecParameters_channel_layoutmask","AVCodecParameters_channel_layoutmask_s","AVCodecParameters_channels","AVCodecParameters_channels_s","AVCodecParameters_ch_layout_nb_channels","AVCodecParameters_ch_layout_nb_channels_s","AVCodecParameters_chroma_location","AVCodecParameters_chroma_location_s","AVCodecParameters_codec_id","AVCodecParameters_codec_id_s","AVCodecParameters_codec_tag","AVCodecParameters_codec_tag_s","AVCodecParameters_codec_type","AVCodecParameters_codec_type_s","AVCodecParameters_color_primaries","AVCodecParameters_color_primaries_s","AVCodecParameters_color_range","AVCodecParameters_color_range_s","AVCodecParameters_color_space","AVCodecParameters_color_space_s","AVCodecParameters_color_trc","AVCodecParameters_color_trc_s","AVCodecParameters_extradata","AVCodecParameters_extradata_s","AVCodecParameters_extradata_size","AVCodecParameters_extradata_size_s","AVCodecParameters_format","AVCodecParameters_format_s","AVCodecParameters_framerate_num","AVCodecParameters_framerate_num_s","AVCodecParameters_framerate_den","AVCodecParameters_framerate_den_s","AVCodecParameters_framerate_s","AVCodecParameters_height","AVCodecParameters_height_s","AVCodecParameters_level","AVCodecParameters_level_s","AVCodecParameters_profile","AVCodecParameters_profile_s","AVCodecParameters_sample_rate","AVCodecParameters_sample_rate_s","AVCodecParameters_width","AVCodecParameters_width_s","AVPacket_data","AVPacket_data_s","AVPacket_dts","AVPacket_dts_s","AVPacket_dtshi","AVPacket_dtshi_s","AVPacket_duration","AVPacket_duration_s","AVPacket_durationhi","AVPacket_durationhi_s","AVPacket_flags","AVPacket_flags_s","AVPacket_pos","AVPacket_pos_s","AVPacket_poshi","AVPacket_poshi_s","AVPacket_pts","AVPacket_pts_s","AVPacket_ptshi","AVPacket_ptshi_s","AVPacket_side_data","AVPacket_side_data_s","AVPacket_side_data_elems","AVPacket_side_data_elems_s","AVPacket_size","AVPacket_size_s","AVPacket_stream_index","AVPacket_stream_index_s","AVPacket_time_base_num","AVPacket_time_base_num_s","AVPacket_time_base_den","AVPacket_time_base_den_s","AVPacket_time_base_s","AVFormatContext_flags","AVFormatContext_flags_s","AVFormatContext_nb_streams","AVFormatContext_nb_streams_s","AVFormatContext_oformat","AVFormatContext_oformat_s","AVFormatContext_pb","AVFormatContext_pb_s","AVFormatContext_streams_a","AVFormatContext_streams_a_s","AVStream_codecpar","AVStream_codecpar_s","AVStream_discard","AVStream_discard_s","AVStream_duration","AVStream_duration_s","AVStream_durationhi","AVStream_durationhi_s","AVStream_time_base_num","AVStream_time_base_num_s","AVStream_time_base_den","AVStream_time_base_den_s","AVStream_time_base_s","AVFilterInOut_filter_ctx","AVFilterInOut_filter_ctx_s","AVFilterInOut_name","AVFilterInOut_name_s","AVFilterInOut_next","AVFilterInOut_next_s","AVFilterInOut_pad_idx","AVFilterInOut_pad_idx_s","ff_reader_dev_send","ff_block_reader_dev_send","ff_reader_dev_waiting","ff_init_encoder","ff_init_decoder","ff_free_encoder","ff_free_decoder","ff_encode_multi","ff_decode_multi","ff_set_packet","ff_init_muxer","ff_free_muxer","ff_init_demuxer_file","ff_write_multi","ff_read_frame_multi","ff_read_multi","ff_init_filter_graph","ff_filter_multi","ff_decode_filter_multi","ff_copyout_frame","ff_copyout_frame_video","ff_frame_video_packed_size","ff_copyout_frame_video_packed","ff_copyout_frame_video_imagedata","ff_copyout_frame_ptr","ff_copyin_frame","ff_copyout_packet","ff_copyout_packet_ptr","ff_copyin_packet","ff_copyout_codecpar","ff_copyin_codecpar","ff_malloc_int32_list","ff_malloc_int64_list","ffmpeg","ffprobe","av_frame_free_js","av_packet_free_js","avformat_close_input_js","avcodec_free_context_js","avcodec_parameters_free_js","avfilter_graph_free_js","avfilter_inout_free_js","av_dict_free_js"];var t=["readFile","writeFile","unlink","unmount","mkdev","createLazyFile","mkreaderdev","mkblockreaderdev","mkreadaheadfile","unlinkreadaheadfile","mkwriterdev","mkstreamwriterdev","mountwriterfs","mkworkerfsfile","unlinkworkerfsfile","copyin_u8","copyout_u8","copyin_s16","copyout_s16","copyin_s32","copyout_s32","copyin_f32","copyout_f32"];i.libavjsMode=s;if(s==="worker"){e(a);e(t)}else if(s==="threads"){e(a);_(t)}else{_(a);_(t)}Object.assign(i,m);return i})}})();export default LibAV;
