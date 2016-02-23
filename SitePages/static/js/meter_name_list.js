/**
 * Created by pwwpcheng on 2016/1/13.
 */

/*
 * meter_name_list stores Chinese translation of every meter name
 */
var meter_name_list = {
    'cpu':'cpu时间',
    'cpu_util':'cpu使用率',
    'disk.allocation':'磁盘已分配空间',
    'disk.capacity':'磁盘总容量',
    'disk.read.bytes':'磁盘读取数据量',
    'disk.read.bytes.rate':'磁盘读取速率',
    'disk.read.requests':'磁盘读取请求数',
    'disk.read.requests.rate':'磁盘读取请求速率',
    'disk.root.size':'磁盘总空间*',
    'disk.usage':'磁盘使用率',
    'disk.write.bytes':'磁盘写入数据量',
    'disk.write.bytes.rate':'磁盘写入数据速率',
    'disk.write.requests':'磁盘写入请求数',
    'disk.write.requests.rate':'磁盘写入请求速率',
    'disk.device.allocation':'磁盘设备已分配空间',
    'disk.device.capacity':'磁盘设备总容量',
    'disk.device.read.bytes':'磁盘设备读取数据量',
    'disk.device.read.bytes.rate':'磁盘设备读取速率',
    'disk.device.read.requests':'磁盘设备读取请求数',
    'disk.device.read.requests.rate':'磁盘设备读取请求速率',
    'disk.device.root.size':'磁盘设备总空间*',
    'disk.device.usage':'磁盘设备使用率',
    'disk.device.write.bytes':'磁盘设备写入数据量',
    'disk.device.write.bytes.rate':'磁盘设备写入数据速率',
    'disk.device.write.requests':'磁盘设备写入请求数',
    'disk.device.write.requests.rate':'磁盘设备写入请求速率',
    'hardware.cpu.load.15min':'cpu15分钟内负载',
    'hardware.cpu.load.1min':'cpu1分钟内负载',
    'hardware.cpu.load.5min':'cpu5分钟内负载',
    'hardware.disk.size.total':'磁盘总空间',
    'hardware.disk.size.used':'磁盘已使用空间',
    'hardware.memory.swap.avail':'内存空闲交换空间',
    'hardware.memory.swap.total':'内存总的交换空间',
    'hardware.memory.total':'内存总大小',
    'hardware.memory.used':'内存已使用量',
    'hardware.network.incoming.bytes':'网卡流入字节数',
    'hardware.network.ip.incoming.datagrams':'网卡流入数据报数',
    'hardware.network.ip.outgoing.datagrams':'网卡输出数据报数',
    'hardware.network.outgoing.bytes':'网络输出字节数',
    'hardware.network.outgoing.errors':'网络输出坏数据报数',
    'image':'镜像名称存在',
    'image.size':'镜像大小',
    'instance':'实例存在',
    'instance:m1.small':'small实例类型',
    'memory':'内存总量',
    'memory.resident':'内存驻留空间',
    'memory.usage':'内存使用率',
    'network.incoming.bytes':'网卡流入字节数',
    'network.incoming.bytes.rate':'网卡流入字节数率',
    'network.incoming.packets':'网卡流入数据报数',
    'network.incoming.packets.rate':'网卡流入数据报数速率',
    'network.outgoing.bytes':'网卡输出字节数',
    'network.outgoing.bytes.rate':'网卡输出字节数速率',
    'network.outgoing.packets':'网卡输出数据报数',
    'network.outgoing.packets.rate':'网卡输出数据报数速率',
    'vcpus':'虚拟CPU数'
};